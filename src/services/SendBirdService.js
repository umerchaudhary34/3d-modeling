
import SendBird from 'sendbird';

const APP_ID = '105DE9F9-4BD3-4CA3-A129-DFCBB54270EE'; // Replace with your SendBird App ID
const API_TOKEN = '4ea00939a0c8f371abe8ddec9d0ee79704ab1ee5';
let sendbirdInstance = null;

export const initSendBird = () => {
    if (!sendbirdInstance) {
        sendbirdInstance = new SendBird({ appId: APP_ID });
        console.log('SendBird initialized');
    }
    return sendbirdInstance;
};

export const initSendBirdCalls = () => {
    if (!SendBirdCall.appId) {
        SendBirdCall.init(APP_ID);
        console.log('SendBird Calls initialized');
    }
};

// Connect the user to SendBird
export const autoLogin = async (userId, nickname) => {
    const sb = initSendBird();
    return new Promise((resolve, reject) => {
        sb.connect(userId, (user, error) => {
            if (error) {
                console.error('Login failed:', error);
                reject(error);
            } else {
                console.log('Auto-login successful:', user);
                sb.updateCurrentUserInfo(nickname, null, () => resolve(user));
            }
        });
    });
};

// Create or join a 1-on-1 Group Channel
export const createOrJoinGroupChannel = async (currentUserId, targetUserId) => {
    console.log('Connecting to chat with', targetUserId);
    console.log('Connecting to current with', currentUserId);

    const sb = initSendBird();
    return new Promise((resolve, reject) => {
        sb.GroupChannel.createChannelWithUserIds([currentUserId, targetUserId], true, (channel, error) => {
            if (error) {
                console.error('Error creating/joining channel:', error);
                reject(error);
            } else {
                console.log('Channel created/joined successfully:', channel.url);
                resolve(channel);
            }
        });
    });
};

// Send a message
export const sendMessage = (channel, messageText) => {
    return new Promise((resolve, reject) => {
        channel.sendUserMessage(messageText, (message, error) => {
            if (error) {
                console.error('Send message failed:', error);
                reject(error);
            } else {
                resolve(message);
            }
        });
    });
};

// Add a message listener
export const addMessageListener = (handlerId, onMessageReceived) => {
    const sb = initSendBird();
    const handler = new sb.ChannelHandler();
    handler.onMessageReceived = onMessageReceived;
    sb.addChannelHandler(handlerId, handler);
};

export const addUserToSendBird = async (userId, nickname, profileUrl = "") => {
    console.log('Creating user in SendBird userId and name:', userId, nickname);
    
    try {
        const response = await fetch(
            `https://api-${APP_ID}.sendbird.com/v3/users`, // SendBird Admin API URL
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-Token': API_TOKEN,
                },
                body: JSON.stringify({
                    user_id: userId,
                    nickname: nickname,
                    profile_url: profileUrl,
                }),
            }
        );

        const result = await response.json();

        if (response.ok) {
            console.log('User successfully created in SendBird:', result);
            return result;
        } else {
            console.error('Error creating user in SendBird:', result);
            throw new Error(result.message || 'Failed to create user');
        }
    } catch (error) {
        console.error('Error in addUserToSendBird:', error);
        throw error;
    }
};

export const authenticateUserForCalls = async (userId, accessToken) => {
    return new Promise((resolve, reject) => {
        initSendBirdCalls();
        SendBirdCall.authenticate({ userId, accessToken }, (result, error) => {
            if (error) {
                console.error('SendBird Calls authentication failed:', error);
                reject(error);
            } else {
                console.log('User authenticated for SendBird Calls:', result.userId);
                resolve(result);
            }
        });
    });
};

export const ensureUserExists = async (userId, nickname) => {
    try {
        // Check if user exists
        const response = await fetch(
            `https://api-${APP_ID}.sendbird.com/v3/users/${userId}`, // SendBird Admin API URL
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-Token': API_TOKEN,
                },
            }
        );
        console.log('Checking user existence in SendBird response:', response);

        if (response.ok) {
            const user = await response.json();
            console.log('User already exists in SendBird:', user);
            return user;
        } else {
            const error = await response.json();
            console.error('Error checking user existence in SendBird:', error);
            if (error.code === 400201) {
                // User does not exist, create them
                console.log('User does not exist, creating user in SendBird');
                return await addUserToSendBird(userId, nickname);
            }
            throw new Error(error.message || 'Failed to check user existence');
        }
    } catch (error) {
        console.error('Error in ensureUserExists:', error);

        throw error;
    }
};

// Modified autoLogin to ensure the user exists first
export const loginOrCreateUser = async (userId, nickname) => {
    try {
        // Ensure the user exists in SendBird
        await ensureUserExists(userId, nickname);

        // Proceed with login
        return await autoLogin(userId, nickname);
    } catch (error) {
        console.error('Error in loginOrCreateUser:', error);
        throw error;
    }
};
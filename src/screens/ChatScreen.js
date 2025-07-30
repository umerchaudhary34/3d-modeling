import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  ensureUserExists,
  createOrJoinGroupChannel,
  sendMessage,
  addMessageListener,
} from '../services/SendBirdService';
import InputField from '../components/InputField';
import CallService from '../services/CallService';


const ChatScreen = ({ route, navigation }) => {
  const { targetUserId, targetNickname } = route.params; // Assuming `targetNickname` is passed
  const [channel, setChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  const currentUserId = 'defaultUser'; // Replace with actual logged-in user ID
  const currentNickname = 'Default User'; // Replace with actual logged-in user nickname

  const [directCall, setDirectCall] = useState(null);

  useEffect(() => {
    if (directCall) {
      // Attach listener for the direct call
      directCall.addListener('CALL_LISTENER', {
        onConnected: () => {
          console.log('Call connected');
        },
        onEnded: callLog => {
          console.log('Call ended:', callLog);
        },
        onRemoteAudioSettingsChanged: isMuted => {
          console.log('Remote audio muted:', isMuted);
        },
        onRemoteVideoSettingsChanged: isVideoEnabled => {
          console.log('Remote video enabled:', isVideoEnabled);
        },
      });
    }

    return () => {
      if (directCall) {
        directCall.removeListener('CALL_LISTENER');
      }
    };
  }, [directCall]);

  useEffect(() => {
    const setupChat = async () => {
      try {
        // Step 1: Check if the user exists or create the user in SendBird
        await ensureUserExists(currentUserId, currentNickname);

        // Step 2: Ensure target user exists in SendBird
        await ensureUserExists(targetUserId, targetNickname);

        // Step 3: Create or join a group channel
        const groupChannel = await createOrJoinGroupChannel(
          currentUserId,
          targetUserId,
        );
        setChannel(groupChannel);
        console.log('Channel connected successfully:', groupChannel.url);

        // Step 4: Fetch previous messages
        fetchPreviousMessages(groupChannel);

        // Step 5: Add a message listener for real-time updates
        addMessageListener('chatHandler', (channel, message) => {
          console.log('New message received:', message.message);
          const formattedMessage = formatSendBirdMessage(message);
          setMessages(prev => GiftedChat.append(prev, formattedMessage));
        });

        console.log('Message listener added.');
      } catch (error) {
        console.error('Error setting up chat:', error);
      }
    };

    setupChat();

    return () => {
      // Cleanup listener
      const sb = channel?.sendbird || null;
      if (sb) sb.removeChannelHandler('chatHandler');
    };
  }, [targetUserId]);

  // Fetch previous messages from the channel
  const fetchPreviousMessages = async groupChannel => {
    try {
      const messageQuery = groupChannel.createPreviousMessageListQuery();
      messageQuery.limit = 30; // Fetch the last 30 messages
      messageQuery.reverse = true; // Show newest messages first

      messageQuery.load((messageList, error) => {
        if (error) {
          console.error('Error fetching previous messages:', error);
        } else {
          const formattedMessages = messageList.map(formatSendBirdMessage);
          setMessages(formattedMessages);
        }
      });
    } catch (error) {
      console.error('Error fetching previous messages:', error);
    }
  };

  // Format SendBird message to GiftedChat message
  const formatSendBirdMessage = msg => ({
    _id: msg.messageId,
    text: msg.message,
    createdAt: new Date(msg.createdAt),
    user: {
      _id: msg.sender.userId,
      name: msg.sender.nickname || 'Unknown User',
    },
  });

  const handleSend = async newMessage => {
    if (!channel) return;

    try {
      const messageText = newMessage;
      const sentMessage = await sendMessage(channel, messageText);

      // Append the sent message to GiftedChat
      const formattedMessage = formatSendBirdMessage(sentMessage);
      setMessages(prev => GiftedChat.append(prev, formattedMessage));
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const renderInputField = () => {
    return (
      <View>
        <InputField onSend={message => handleSend(message)} />
      </View>
    );
  };

  const handleCall = async (isVideoCall) => {
    try {
      await CallService.requestPermissions();
      const call = await CallService.makeCall(targetUserId, isVideoCall);
      console.log('Call initiated:', call);
    } catch (error) {
      console.error('Error initiating call:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#1C1E2C" />
      {/* Back Button */}
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => handleCall(false)}>
          <Text style={styles.backText}>Call</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chatContainer}>
        {/* Chat UI */}
        <GiftedChat
          scrollToBottom
          inverted
          alwaysShowSend
          keyboardShouldPersistTaps="handled"
          messages={messages}
          user={{ _id: currentUserId, name: currentNickname }} // Replace with actual logged-in user info
          renderInputToolbar={renderInputField}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  container: { flex: 1, backgroundColor: '#1C1E2C' },
  backButton: { paddingVertical: 5, paddingHorizontal: 10 },
  backText: { fontSize: 18, color: 'blue' },
  chatContainer: {
    flex: 1,
    backgroundColor: '#1C1E2C',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
  },
});

export default ChatScreen;

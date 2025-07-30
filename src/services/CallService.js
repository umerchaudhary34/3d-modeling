import { PermissionsAndroid, Platform } from 'react-native';
import { SendbirdCalls } from '@sendbird/calls-react-native';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';

const APP_ID = '105DE9F9-4BD3-4CA3-A129-DFCBB54270EE';  // Replace with your Sendbird Application ID

class CallService {
    static async initialize() {
        SendbirdCalls.initialize(APP_ID);
        console.log('Sendbird Calls initialized');
    }

    static async requestPermissions() {
        if (Platform.OS === 'android') {
            await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]);
        } else {
            await requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE]);
        }
    }

    static async authenticate(userId, accessToken) {
        try {
            const user = await SendbirdCalls.authenticate({ userId, accessToken });
            console.log('User authenticated:', user);
            return user;
        } catch (error) {
            console.error('Authentication error:', error);
            throw error;
        }
    }

    static async makeCall(calleeId, isVideoCall) {
        try {
            const callOptions = {
                audioEnabled: true,
                videoEnabled: isVideoCall,
                frontCamera: true,
            };

            const callProps = await SendbirdCalls.dial(calleeId, isVideoCall, callOptions);
            const directCall = await SendbirdCalls.getDirectCall(callProps.callId);

            directCall.addListener({
                onConnected: () => console.log('Call connected'),
                onEnded: () => console.log('Call ended'),
                onEstablished: () => console.log('Call established'),
            });

            console.log('Call initiated:', callProps);
            return directCall;
        } catch (error) {
            console.error('Error making call:', error);
            throw error;
        }
    }

    static async receiveCall(callProps) {
        try {
            const directCall = await SendbirdCalls.getDirectCall(callProps.callId);

            directCall.addListener({
                onConnected: () => console.log('Call connected'),
                onEnded: () => console.log('Call ended'),
                onEstablished: () => console.log('Call established'),
            });

            console.log('Incoming call:', callProps);
            return directCall;
        } catch (error) {
            console.error('Error receiving call:', error);
        }
    }
}

export default CallService;

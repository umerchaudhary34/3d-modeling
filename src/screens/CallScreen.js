import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import SendbirdCalls, { VideoView } from '@sendbird/calls-react-native';
import { authenticateUserForCalls, startCall } from '../services/SendBirdService';

const CallScreen = ({ route, navigation }) => {
    const { calleeId } = route.params;
    const [call, setCall] = useState(null);
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);

    useEffect(() => {
        const initiateCall = async () => {
            try {
                console.log('Starting authentication...');
                const user = await authenticateUserForCalls('defaultUser'); // Replace with your userId
                console.log('User authenticated:', user);

                const newCall = await startCall(calleeId, true); // true for video
                setCall(newCall);

                newCall.onEstablished = () => {
                    console.log('Call established');
                };

                newCall.onEnded = () => {
                    console.log('Call ended');
                    Alert.alert('Call ended');
                    // router.back();
                    navigation.goBack();
                };
            } catch (error) {
                console.error('Error during call setup:', error);
            }
        };

        initiateCall();
    }, [calleeId]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calling {calleeId}...</Text>
            <View style={styles.videoContainer}>
                {/* <VideoView ref={localVideoRef} style={styles.localVideo} /> */}
                {/* <VideoView ref={remoteVideoRef} style={styles.remoteVideo} /> */}
            </View>
            <Button title="End Call" onPress={() => {
                call && call.end();
                navigation.goBack();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1C1E2C' },
    title: { fontSize: 20, color: '#fff', marginBottom: 20 },
    videoContainer: { flexDirection: 'row', marginTop: 20 },
    localVideo: { width: 100, height: 150, backgroundColor: '#000', marginRight: 10 },
    remoteVideo: { width: 200, height: 300, backgroundColor: '#000' },
});

export default CallScreen;
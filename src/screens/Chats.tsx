import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {autoLogin, initSendBird} from '../services/SendBirdService';
import CallService from '../services/CallService';

interface iProp {
  navigation: any;
}

const Chats: React.FC<iProp> = ({navigation}) => {
  const people = [
    {
      id: 'user1',
      name: 'Alice',
      lastMessage: 'Hi, Where in the world would you like to go',
      unreadCount: 0,
      time: '15:18',
      isOnline: true,
    },
    {
      id: 'user2',
      name: 'Bob',
      lastMessage: "Hi, I'm good thanks.",
      unreadCount: 3,
      time: '08:18',
      isOnline: false,
    },
    {
      id: 'user3',
      name: 'Charlie',
      lastMessage: "Hey, what's up?",
      unreadCount: 0,
      time: '10:18',
      isOnline: false,
    },
    {
      id: 'user4',
      name: 'David',
      lastMessage: "Hi, I'm good thanks.",
      unreadCount: 4,
      time: '15:18',
      isOnline: true,
    },
    {
      id: 'user5',
      name: 'Eve',
      lastMessage: "Hey, what's up?",
      unreadCount: 0,
      time: '12:18',
      isOnline: true,
    },
    {
      id: 'user6',
      name: 'Eve',
      lastMessage: "Hey, what's up?",
      unreadCount: 0,
      time: '12:18',
      isOnline: true,
    },
    {
      id: 'user7',
      name: 'Eve',
      lastMessage: "Hey, what's up?",
      unreadCount: 0,
      time: '12:18',
      isOnline: true,
    },
  ];

  // const onChatPress = (targetUserId: number) => {
  //   router.push({
  //     pathname: "/Dashboard/ChatScreen",
  //     params: { targetUserId }, // Replace 'me' with the logged-in user
  //   });
  // };

  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    CallService.initialize();
    const initializeSendBird = async () => {
      try {
        initSendBird(); // Initialize the SendBird instance
        console.log('Initializing SendBird...');

        await autoLogin('defaultUser', 'Default User'); // Auto-login as 'defaultUser'
        console.log('Auto-login successful');
        setIsConnected(true);
      } catch (error) {
        console.error('Failed to connect to SendBird:', error);
      }
    };

    initializeSendBird();
  }, []);

  const onChatPress = (targetUserId: string, targetNickname: string) => {
    if (!isConnected) {
      console.error('User not connected. Cannot open chat.');
      return;
    }

    // Navigate to the chat screen with the target user ID
    // router.push({ pathname: '/Dashboard/ChatScreen', params: { targetUserId } });
    // router.push({
    //   pathname: '/Dashboard/CallScreen',
    //   params: {calleeId: targetUserId},
    // });
    navigation.navigate('ChatScreen', {targetUserId, targetNickname});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold'}}>Chats</Text>
      </View>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: '20'}}>Messages</Text>
            <View style={styles.chatsContainer}>
              {people.map((person, index) => (
                <TouchableOpacity
                  onPress={() => onChatPress(person.id, person.name)}
                  style={{
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgray',
                  }}>
                  <Text>{person.name}</Text>
                  <Text>{person.lastMessage}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatsContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    height: '100%',
  },
  header: {
    width: '100%',
    padding: 10,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  footer: {
    height: 94,
  },
  horizontalProfilesContainer: {
    height: 180,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    paddingTop: 20,
  },
  matchProfilesContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchProfilesHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewAllLinkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Chats;

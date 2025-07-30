import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

interface InputFieldProps {
  onSend: (message: string) => void; // Function to send the message
}

const InputField: React.FC<InputFieldProps> = ({onSend}) => {
  const [message, setMessage] = useState('');

  // Handle sending the message
  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage(''); // Clear input field
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80} // Adjust this value if needed
      style={styles.container}>
      <View style={styles.inputContainer}>
        {/* TextInput Field */}
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          multiline
        />

        {/* Send Button */}
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1E2C',
    paddingHorizontal: 10,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#202020',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#181818',
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#ffffff',
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  sendText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InputField;

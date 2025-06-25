import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { FontAwesome, Feather } from "react-native-vector-icons";

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! How can I assist you today?", sender: "support" },
    { id: "2", text: "I need help with my booking.", sender: "user" },
    { id: "3", text: "Sure! Can you provide your booking ID?", sender: "support" },
    { id: "4", text: "Yes, it's 123456.", sender: "user" },
    { id: "5", text: "Thank you! Let me check that for you.", sender: "support" },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;
    const newMessage = { id: Date.now().toString(), text: inputText, sender: "user" };
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <View style={styles.container}>
      {/* 🔙 Back Button & Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Help Center</Text>
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageBubble, item.sender === "user" ? styles.userBubble : styles.supportBubble]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }} // Extra padding for input field
        inverted
      />

      {/* Message Input with KeyboardAvoidingView */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={styles.inputWrapper}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <FontAwesome name="send" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  header: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingTop: 50,
    backgroundColor: "#fff",
    elevation: 2,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: "#F0F0F0",
    elevation: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#333",
  },
  messageBubble: {
    padding: 14,
    borderRadius: 15,
    marginVertical: 6,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  userBubble: {
    backgroundColor: "#2B74FF",
    alignSelf: "flex-end",
    marginRight: 15,
    borderTopRightRadius: 2,
  },
  supportBubble: {
    backgroundColor: "#E0E0E0",
    alignSelf: "flex-start",
    marginLeft: 15,
    borderTopLeftRadius: 2,
  },
  messageText: {
    fontSize: 14,
    color: "white",
  },
  inputWrapper: {
    position: "absolute",
    bottom: 60, // Adjusted for bottom nav bar
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    elevation: 5,
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
    paddingBottom: Platform.OS === "ios" ? 20 : 10, // Adjust for iOS safe area
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  input: {
    flex: 1,
    height: 42,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  sendButton: {
    backgroundColor: "#2B74FF",
    padding: 12,
    borderRadius: 50,
    marginLeft: 10,
  },
});

export default ChatScreen;

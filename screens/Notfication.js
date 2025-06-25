import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native"; // ✅ Import useNavigation

const notifications = [
  { id: "1", title: "Hotel Booked Successfully", time: "1h", section: "Today" },
  { id: "2", title: "Exclusive Offers Inside", time: "1h", section: "Today" },
  { id: "3", title: "Hotel Review Request", time: "1h", section: "Today" },
  { id: "4", title: "Hotel Booked Successfully", time: "1d", section: "Yesterday" },
];

const NotificationScreen = () => {
  const navigation = useNavigation(); // ✅ Get navigation object

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <FontAwesome name="bell" size={22} color="#2B74FF" />
      <View style={styles.notificationText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 🔙 Back Button & Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
        <TouchableOpacity style={styles.newBadge}>
          <Text style={styles.newBadgeText}>2 NEW</Text>
        </TouchableOpacity>
      </View>

      {/* Mark all as read */}
      <TouchableOpacity>
        <Text style={styles.markAll}>Mark all as read</Text>
      </TouchableOpacity>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: "#fff",
    elevation: 3,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  newBadge: {
    backgroundColor: "#2B74FF",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  },
  newBadgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  markAll: {
    color: "#2B74FF",
    fontSize: 14,
    textAlign: "right",
    marginBottom: 10,
  },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },
  notificationText: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 12,
    color: "#757575",
  },
  time: {
    fontSize: 12,
    color: "#999",
  },
});

export default NotificationScreen;

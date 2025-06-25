import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Animated,
} from "react-native";
import { FontAwesome } from "react-native-vector-icons";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [history, setHistory] = useState([
    "Deluxe Room",
    "Sea View",
    "Luxury Suite",
    "Budget Hotel",
  ]);
  const fadeAnim = new Animated.Value(0);

  const handleSearch = () => {
    if (searchText.trim() === "") return;
    setHistory([searchText, ...history.slice(0, 4)]); // Limit history to 5 items
    setSearchText("");
  };

  const clearHistory = () => setHistory([]);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={18} color="#555" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for rooms..."
            placeholderTextColor="#aaa"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>

      {/* Search History */}
      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>Recent Searches</Text>
        <TouchableOpacity onPress={clearHistory}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={{ opacity: fadeAnim }}>
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.historyItem}>
              <FontAwesome name="history" size={16} color="#555" style={styles.historyIcon} />
              <Text style={styles.historyText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0F6",
    padding: 15,
  },
  searchWrapper: {
    alignItems: "center",
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    width: "90%",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  clearText: {
    color: "#007AFF",
    fontSize: 14,
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    marginBottom: 10,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
  },
  historyIcon: {
    marginRight: 12,
  },
  historyText: {
    fontSize: 16,
    color: "#333",
  },
});

export default SearchScreen;

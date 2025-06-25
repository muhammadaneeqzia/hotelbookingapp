import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import NearbyHotelCard from "../components/nearbycard";
import FavCards from "../components/favCards";

export default function FavoriteScreen({navigation}) {
  const [selectedTab, setSelectedTab] = useState("All");
  const tabs = ["All", "Recommended", "Popular", "Trending", "New Arrivals"];

  return (
    <View style={styles.container}>
      {/* 🔹 Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.circle}>
          <Icon name="arrow-left" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headingtxt}>Favorite</Text>
        <TouchableOpacity style={styles.circle}>
          <Icon name="search" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* 🔹 Scrollable Tabs (Slider) */}
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.tab, selectedTab === item && styles.activeTab]}
            onPress={() => setSelectedTab(item)}
          >
            <Text
              style={[styles.tabText, selectedTab === item && styles.activeTabText]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* 🔹 Hotel Cards List */}
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("details", { image1: require("../assets/bed1.png") })}><FavCards image={require("../assets/bed1.png")}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("details", { image1: require("../assets/bed2.png") })}><FavCards image={require("../assets/bed2.png")}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("details", { image1: require("../assets/bed3.png") })}><FavCards image={require("../assets/bed3.png")}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("details", { image1: require("../assets/bed4.jpeg") })}><FavCards image={require("../assets/bed4.jpeg")}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("details", { image1: require("../assets/bed5.jpeg") })}><FavCards image={require("../assets/bed5.jpeg")}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("details", { image1: require("../assets/bed6.jpeg") })}><FavCards image={require("../assets/bed6.jpeg")}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("details", { image1: require("../assets/bed7.jpeg") })}><FavCards image={require("../assets/bed7.jpeg")}/></TouchableOpacity>
    

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headingtxt: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#989898",
    borderWidth: 1,
  },
  tabContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    paddingBottom: 10,
    height: 50,
    textAlign: "center",
    justifyContent: "center",
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#E5E5E5",
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: "#2B74FF",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  
});

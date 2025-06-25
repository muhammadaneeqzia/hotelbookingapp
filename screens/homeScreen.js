import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, useState } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HotelCard from "../components/cards";
import NearbyHotelCard from "../components/nearbycard";
import DetailsScreen from "./detailsScreen";
import BellIcon from "../components/bellIcon";

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Location Heading */}
            <Text style={styles.locHeading}>Your Location</Text>

            {/* Location Selection Bar */}
            <View style={styles.locContainer}>
                <TouchableOpacity style={styles.locSelector}>
                    <FontAwesome name="map-marker" size={24} color="#2B74FF" />
                    <Text style={styles.locText}>Current Location</Text>
                    <Icon name="chevron-down" size={20} color="black" />
                </TouchableOpacity>

                {/* Profile Icon */}
                <BellIcon NotificationCount={3} />

            </View>

            {/* Search Bar */}
            <View style={styles.inputContainer}>
                <View style={styles.searchbox}>
                    <Icon name="search" size={24} color="#2B74FF" />
                </View>
                <TextInput style={styles.searchInput} placeholder="Search ..." />
                <View style={styles.filterContainer}>
                    <TouchableOpacity style={styles.filter} onPress={() =>alert("working on this feature")}>
                        <FontAwesome name="sliders" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Recommended Hotels Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Recommended Hotel</Text>
                <Text style={styles.sectionLink}>See all</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                <TouchableOpacity onPress={() => {

                    navigation.navigate("details", { image1: require("../assets/cardimg1.jpeg"),price:"$650",headingtext:"Hotel California" })

                }}><HotelCard headingtext={"Hotel California"} price={"$650"} image1={require("../assets/cardimg1.jpeg")} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    navigation.navigate("details", { image1: require("../assets/bed1.png"),price:"$250",headingtext:"Hotel California"})

                }}><HotelCard headingtext={"Hotel California"} price={"$250"} image1={require("../assets/bed1.png")} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    navigation.navigate("details", { image1: require("../assets/bed2.png"),price:"$700",headingtext:"Hotel California" })

                }}><HotelCard headingtext={"Hotel California"} price={"$700"} image1={require("../assets/bed2.png")} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    navigation.navigate("details", { image1: require("../assets/bed4.jpeg"),price:"$600",headingtext:"Hotel California" })

                }}><HotelCard price={"$600"} image1={require("../assets/bed4.jpeg")} /></TouchableOpacity>
            </ScrollView>

            {/* Nearby Hotels Section (Now Scrolls with Whole Page) */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Nearby Hotel</Text>
                <Text style={styles.sectionLink}>See all</Text>
            </View>
            <View style={{ marginBottom: 120 }}>
                <TouchableOpacity onPress={() => {

                    navigation.navigate("details", { image1: require("../assets/bed5.jpeg") })

                }}><NearbyHotelCard price={"$650"} image={require("../assets/bed5.jpeg")} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    navigation.navigate("details", { image1: require("../assets/bed7.jpeg") })

                }}><NearbyHotelCard price={"$250"} image={require("../assets/bed7.jpeg")} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    navigation.navigate("details", { image1: require("../assets/bed2.png") })

                }}><NearbyHotelCard price={"$700"} image={require("../assets/bed2.png")} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    navigation.navigate("details", { image1: require("../assets/bed7.jpeg") })

                }}><NearbyHotelCard price={"$600"} image={require("../assets/bed7.jpeg")} /></TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    locHeading: {
        color: "#777",
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 10,
    },
    locContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    locSelector: {
        flexDirection: "row",
        alignItems: "center",
    },
    locText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        marginHorizontal: 8,
    },
    searchInput: {
        flex: 1,
        height: 50,
    },
    // profileIcon: {
    //     padding: 10,
    //     backgroundColor: "#F0F0F0",
    //     borderRadius: 50,
    //     height: 50,
    //     width: 50,
    //     justifyContent: "center",
    //     alignItems: "center",
    // },
    inputContainer: {
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        alignItems: "center",
        paddingHorizontal: 10,
        height: 50,
        width: "100%",
    },
    filterContainer: {
        backgroundColor: "#2B74FF",
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 10,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    sectionLink: {
        fontSize: 16,
        color: "#2B74FF",
    },
    horizontalScroll: {
        paddingLeft: 10,
    },
});



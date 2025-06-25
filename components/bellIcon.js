import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // ✅ Import useNavigation
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function BellIcon({ NotificationCount }) { 
    const navigation = useNavigation(); // ✅ Get navigation object

    return (
        <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate("Notification")}>
            <FontAwesome name="bell" size={30} color="black" />
            
            {NotificationCount > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{NotificationCount}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    profileIcon: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 50,
        elevation: 5,
    },
    badge: {
        position: "absolute",
        backgroundColor: "#2B74FF",
        height: 25,
        width: 25,
        borderRadius: 50,
        top: -5,
        right: -5,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },
});

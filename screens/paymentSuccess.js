import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/Feather";

// Import local animation JSON (Ensure this file exists in assets folder)
import successAnimation from "../assets/success.json"; 

export default function PaymentSuccessScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            {/* Animated Success Checkmark */}
            <LottieView 
                source={successAnimation}
                autoPlay
                loop={false}
                style={styles.animation}
            />

            {/* Success Message */}
            <Text style={styles.title}>Payment Successful!</Text>
            <Text style={styles.subtitle}>Your transaction has been completed successfully.</Text>

            {/* OK Button */}
            <TouchableOpacity style={styles.okButton} onPress={() => navigation.navigate("MainTabs")}>
                <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
        padding: 10,
    },
    animation: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 30,
    },
    okButton: {
        position: "absolute",
        bottom: 30,
        backgroundColor: "#2B74FF",
        width: "90%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    okButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

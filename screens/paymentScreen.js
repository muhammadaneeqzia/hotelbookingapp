import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/Feather";
export default function PaymentScreen({ navigation }) {
    const [cardholderName, setCardholderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Payment</Text>
            </View>

            {/* Card Details Form */}
            <View style={styles.cardForm}>
                <Text style={styles.label}>Cardholder Name</Text>
                <TextInput style={styles.input} placeholder="John Doe" placeholderTextColor="#888" onChangeText={setCardholderName} />

                <Text style={styles.label}>Card Number</Text>
                <TextInput style={styles.input} placeholder="1234 5678 9012 3456" keyboardType="numeric" placeholderTextColor="#888" onChangeText={setCardNumber}/>

                <View style={styles.row}>
                    <View style={styles.halfInput}>
                        <Text style={styles.label}>Expiry Date</Text>
                        <TextInput style={styles.input} placeholder="MM/YY" keyboardType="numeric" placeholderTextColor="#888" onChangeText={setExpiryDate}/>
                    </View>

                    <View style={styles.halfInput}>
                        <Text style={styles.label}>CVV</Text>
                        <TextInput style={styles.input} placeholder="123" keyboardType="numeric" secureTextEntry={true} placeholderTextColor="#888" onChangeText={setCvv}/>
                    </View>
                </View>
            </View>

            {/* Total Amount */}
            <View style={styles.amountContainer}>
                <Text style={styles.amountText}>Total Amount:</Text>
                <Text style={styles.amountValue}>$250.00</Text>
            </View>

            {/* Pay Now Button */}
            <TouchableOpacity style={styles.payButton} onPress={() =>{if(cardholderName && cardNumber && expiryDate && cvv) {navigation.navigate("paymentsuccess")} else {alert("Please fill all the fields")}}}    >
                
                <Text style={styles.payButtonText}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 25,
    },
    backButton: {
        padding: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginLeft: 10,
    },
    cardForm: {
        backgroundColor: "#f8f8f8",
        padding: 15,
        borderRadius: 10,
    },
    label: {
        fontSize: 14,
        color: "black",
        marginBottom: 5,
        marginTop: 10,
    },
    input: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        color: "black",
        borderWidth: 1,
        borderColor: "#ddd",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    halfInput: {
        width: "48%",
    },
    amountContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    amountText: {
        fontSize: 18,
        color: "black",
    },
    amountValue: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
    payButton: {
        backgroundColor: "#2B74FF",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    payButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SquareButton } from "../components";
import { useNavigation } from "@react-navigation/native";

const ErrorScreen = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ocurrió un error</Text>
            <SquareButton title="Volver" onPress={handleGoBack} />
        </View>
    );

}

export default ErrorScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
    },
});
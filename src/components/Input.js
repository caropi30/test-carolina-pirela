import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const Input = ({ title, text, onChangeText, placeholder, secureTextEntry }) => (
    <View style={styles.container}>
        <Text style={styles.textInput}>{title}</Text>
        <TextInput
            value={text}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
        />
    </View>
)

export default Input

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    textInput: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 15,
    },
})

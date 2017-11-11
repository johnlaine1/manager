import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid='transparent'
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}     
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
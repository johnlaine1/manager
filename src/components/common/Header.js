import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const { title } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 7,
        position: 'relative'
    },
    text: {
        fontSize: 20,
        color: 'black'
    }
});

export { Header };
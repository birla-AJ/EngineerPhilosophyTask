import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const CustomButton = props => {
    const { title, onPress, style, textStyle, Image } = props;
    return (
        <View>
            <TouchableOpacity style={Styles.container} onPress={onPress} >
                <Text style={Styles.title}>{title}</Text>

            </TouchableOpacity>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 10
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default CustomButton;

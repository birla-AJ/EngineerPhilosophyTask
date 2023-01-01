import React from 'react';
import {  TextInput } from 'react-native';

const CustomInput = (props) => {
    const { title,value,onChangeText, secureTextEntry,keyboardType} = props
    return (

        <TextInput style={{marginHorizontal:10,borderWidth:1,borderRadius:10,height:45}}
            placeholder={title}
            onChangeText={onChangeText}
            value={value}
           placeholderTextColor={'black'} 
           secureTextEntry={secureTextEntry}
           keyboardType={keyboardType}
           
            />
    )
}


export default CustomInput;
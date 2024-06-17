import React from "react";
import { TextInput } from "react-native";

const customeTextInput = ({ onChangeText, value, placeholder, type, placeholdertext }) => {
    return (
        <TextInput
            value={value}
            onChangeText={(txt) => {
                onChangeText(txt)
            }}
            placeholder={placeholder}
            secureTextEntry={type ? true : false}
            style={{ marginLeft: 10, width: 200, fontSize: 20, color: 'black' }}
            placeholderTextColor={placeholdertext}
        />
    );
};

export default customeTextInput;
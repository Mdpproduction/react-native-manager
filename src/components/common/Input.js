import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ 
 value, 
 onChangeText, 
 placeholder, 
 secureTextEntry, 
 placeholderTextColor, 
 underlineColorAndroid,
 keyboardType,
 returnKeyType
}) => {
 const { inputStyle } = styles;

 return (
   <TextInput 
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    underlineColorAndroid={underlineColorAndroid}
    autoCorrect={false}
    style={inputStyle}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    autoCorrect={false}
    keyboardType={keyboardType}
    returnKeyType={returnKeyType}
   />
 );
};

const styles = {
 inputStyle: {
  backgroundColor: 'rgba(255,255,255,0.2)',
  color: '#FFFFFF',
  paddingRight: 10,
  paddingLeft: 10,
  fontSize: 15,
  lineHeight: 23,
  marginBottom: 20,
 }
};

export { Input };

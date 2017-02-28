import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
 const { buttonStyle, textStyle } = styles;

 return (
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
   <Text style={textStyle}>
    {children}
   </Text>
  </TouchableOpacity>
 );
};

const styles = {
 textStyle: {
  alignSelf: 'center',
  color: '#FFF',
  fontSize: 16,
  fontWeight: '600',
  paddingTop: 5,
  paddingBottom: 5
 },
 buttonStyle: {
  backgroundColor: '#2980B9',
  paddingVertical: 15
 }
};

export { Button };

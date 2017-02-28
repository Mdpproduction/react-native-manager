import React, { Component } from 'react';
import { View, Image, Text, KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import {
 Input, 
 Button,
 Spinner
} from './common';

class LoginForm extends Component {
 onEmailChange(text) {
  this.props.emailChanged(text);
 }

 onPasswordChange(text) {
  this.props.passwordChanged(text);	
 }

 onButtonPress() {
  const { email, password } = this.props;
  
  this.props.loginUser({ email, password });	
 }

 renderButton() {
  if (this.props.loading) {
   return <Spinner size="large" />;
  }

  return (
   <Button onPress={this.onButtonPress.bind(this)}>
    LOGIN
   </Button>  	
  );
 }

 render() {
  return (
   <KeyboardAvoidingView behavior="padding" style={styles.containerStyle}>
    <StatusBar 
     barStyle="light-content" 
     backgroundColor="#2980B9"
    />
    <View style={styles.logoContainerStyle}>
     <Image 
      style={styles.logoImageStyle}
      source={require('../images/logo.png')} 
     />

     <Text style={styles.titleStyle}>An app made for firebase using React Native</Text>
    </View>

     <View style={styles.loginFormContainerStyle}>
      <Input
       placeholder="email@gmail.com"
       onChangeText={this.onEmailChange.bind(this)}
       value={this.props.email}
       placeholderTextColor="rgba(255,255,255,0.7)"
       underlineColorAndroid="rgba(255,255,255,0)"
       keyboardType="email-address"
       returnKeyType="next"
      />

      <Input
       secureTextEntry
       placeholder="password"
       onChangeText={this.onPasswordChange.bind(this)}
       value={this.props.password}
       placeholderTextColor="rgba(255,255,255,0.7)"
       underlineColorAndroid="rgba(255,255,255,0)"
       returnKeyType="go"       
      />

      {this.renderButton()}
     </View>
   </KeyboardAvoidingView>
  );
 }
}

const styles = {
 containerStyle: {
  flex: 1,
  backgroundColor: '#3498db'
 },
 logoContainerStyle: {
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'center'
 },
 logoImageStyle: {
  width: 100,
  height: 100
 },
 titleStyle: {
  color: '#FFF',
  textAlign: 'center',
  marginTop: 10
 },
 loginFormContainerStyle: {
  padding: 20
 }
};

const mapStateToProps = ({ auth }) => {
 const { email, password, error, loading } = auth;

 return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
 emailChanged, passwordChanged, loginUser 
})(LoginForm);

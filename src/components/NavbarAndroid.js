import React, { Component } from 'react';
import { Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Toolbar } from 'react-native-material-design';

class NavbarAndroid extends Component {
 onActionSelected() {
  Actions.employeeCreate();
 }

 render() {
  return (   
   <Animated.View style={{ height: 56, position: 'absolute', top: 0, left: 0, right: 0 }}>
    <Toolbar title={this.props.title} icon={this.props.icon} />
   </Animated.View>
  ); 	
 }
}

export default NavbarAndroid;

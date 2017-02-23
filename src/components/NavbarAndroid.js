import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

class NavbarAndroid extends Component {
 onActionSelected() {
  Actions.employeeCreate();
 }

 render() {
  const { toolbarStyle } = styles;

  return (   
   <Icon.ToolbarAndroid
    style={toolbarStyle}
    title={this.props.title}
    navIconName='menu'
    actions={[
     { title: 'Add', iconName: 'person-add', iconColor: '#FFFFFF', show: 'always' }
    ]}
    onActionSelected={this.onActionSelected}
    titleColor='#FFFFFF'
   />
  ); 	
 }
}

const styles = {
 toolbarStyle: {
  height: 56,
  backgroundColor: '#2196F3',
  borderBottomWidth: 0.5,
  borderBottomColor: '#828287',  
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0
 }
};

export default NavbarAndroid;

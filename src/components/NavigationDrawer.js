import React, { Component } from 'react';
import { DrawerLayoutAndroid, View, Text } from 'react-native';
import { DefaultRenderer } from 'react-native-router-flux';

class NavigationDrawer extends Component {
 componentWillReceiveProps(props) {
  if (props.navigationState.open) {
   this.refs['DRAWER_REF'].openDrawer();
  } else {
   this.refs['DRAWER_REF'].closeDrawer();
  }
 }

 render() {
  const state = this.props.navigationState;
  const children = state.children;

  const navigationView = (
   <View style={styles.navigation.containerStyle}>
    <Text style={styles.navigation.textStyle}>
     I am the drawer!
    </Text>
   </View>
  );  

  return (
   <DrawerLayoutAndroid
    ref={'DRAWER_REF'}
    drawerBackgroundColor="rgba(0,0,0,0.5)"
    drawerWidth={300}
    drawerPosition={DrawerLayoutAndroid.positions.Left}
    renderNavigationView={() => navigationView}
    statusBarBackgroundColor="#dcdcdc"
   >
     <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
    </DrawerLayoutAndroid>
  );
 }
}

const styles = {
  navigation: {
    containerStyle: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    textStyle: {
      margin: 10, 
      fontSize: 15, 
      textAlign: 'left'      
    }
  }
};

export default NavigationDrawer;

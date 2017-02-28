import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
 onRowPress() {
  Actions.employeeEdit({ employee: this.props.employee });
 }

 render() {
  const { name } = this.props.employee;
  
  return (
     <TouchableNativeFeedback 
      onPress={this.onRowPress.bind(this)}
      background={TouchableNativeFeedback.SelectableBackground()}
     >
      <View style={{ height: 50 }}>
          <Text style={styles.titleStyle}>{name}</Text>
      </View>
     </TouchableNativeFeedback>
  );	
 }
}

const styles = {
 titleStyle: {
  fontSize: 18,
  paddingLeft: 15
 }
};

export default ListItem;

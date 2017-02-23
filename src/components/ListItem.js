import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, CardSection } from './common';

class ListItem extends Component {
 onRowPress() {
  console.log('entra');
  Actions.employeeEdit({ employee: this.props.employee });
 }

 render() {
  const { name } = this.props.employee;
  
  return (
   <Card> 
     <TouchableNativeFeedback 
      onPress={() => console.log('test')}
      background={TouchableNativeFeedback.Ripple('red')}
     >
      <View>
        <CardSection>
         <View>
          <Icon name="account-box" size={30} color="#900" />
         </View>

         <View>
           <Text style={styles.titleStyle}>
            {name}
           </Text>
         </View>
        </CardSection>
      </View>
     </TouchableNativeFeedback>
   </Card>
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

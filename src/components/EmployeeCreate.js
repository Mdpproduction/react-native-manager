import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
 onButtonPress() {
  const { name, phone, shift } = this.props;

  this.props.employeeCreate({ name, phone, shift: shift || 'Lunedì' });
 }

 render() {
  return (
   <Card>
    <CardSection>
     <Input
      label="Name"
      placeholder="Jane"
      value={this.props.name}
      onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
     />
    </CardSection>

    <CardSection>
     <Input
      label="Phone"
      placeholder="0833111111"
      value={this.props.phone}
      onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
     />
    </CardSection>

    <CardSection>
     <Picker
      style={{ flex: 1 }}
      selectedValue={this.props.shift}
      onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
     >
      <Picker.Item label="Lunedì" value="Lunedì" />
      <Picker.Item label="Martedì" value="Martedì" />
      <Picker.Item label="Mercoledì" value="Mercoledì" />
      <Picker.Item label="Giovedì" value="Giovedì" />
      <Picker.Item label="Venerdì" value="Venerdì" />
      <Picker.Item label="Sabato" value="Sabato" />
      <Picker.Item label="Domenica" value="Domenica" />
     </Picker>
    </CardSection>

    <CardSection>
     <Button onPress={this.onButtonPress.bind(this)}>
      Create
     </Button>
    </CardSection>
   </Card>
  );	
 }
}

const mapStateToProps = (state) => {
 const { name, phone, shift } = state.employeeForm;

 return { name, phone, shift };
};

export default connect(mapStateToProps, { 
 employeeUpdate, employeeCreate 
})(EmployeeCreate);

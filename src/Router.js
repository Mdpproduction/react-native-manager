import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
 return (
  <Router sceneStyle={{ paddingTop: 65 }}>
   <Scene key="auth">
    <Scene key="login" component={LoginForm} title="Login" initial />
   </Scene>
   
   <Scene key="main">
    <Scene 
     onRight={() => Actions.employeeCreate()}
     rightTitle="Add"
     key="employeeList" 
     component={EmployeeList} 
     title="Employees" 
    />
    <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
    <Scene key="employeeEdit" title="Edit employee" component={EmployeeEdit} />
   </Scene>
  </Router>
 );
};

export default RouterComponent;

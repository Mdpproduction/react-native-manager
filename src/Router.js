import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import NavbarAndroid from './components/NavbarAndroid';
import NavigationDrawer from './components/NavigationDrawer';

const RouterComponent = () => {
 return (
  <Router>
   <Scene key="auth">
    <Scene key="login" component={LoginForm} title="Login" initial hideNavBar />
   </Scene>

   <Scene key="drawer" component={NavigationDrawer} open={false}>
     <Scene key="main" style={{ paddingTop: 65 }}>
      <Scene 
       onRight={() => Actions.employeeCreate()}
       rightTitle="Add"
       key="employeeList" 
       component={EmployeeList} 
       title="Employees"
       navBar={NavbarAndroid}
      />
      <Scene 
       key="employeeCreate" 
       title="Create Employee" 
       component={EmployeeCreate}
       navBar={NavbarAndroid}
      />
      <Scene 
       key="employeeEdit" 
       title="Edit employee" 
       component={EmployeeEdit}
       navBar={NavbarAndroid}
      />
     </Scene>
   </Scene>
  </Router>
 );
};

export default RouterComponent;

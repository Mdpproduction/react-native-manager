import { ToastAndroid } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
 EMPLOYEE_UPDATE, 
 EMPLOYEE_CREATE,
 EMPLOYEES_FETCH,
 EMPLOYEE_SAVE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
 return {
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
 };
};

export const employeeCreate = ({ name, phone, shift }) => {
 const { currentUser } = firebase.auth();
 
 return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
   .push({ name, phone, shift })
   .then(() => {
    dispatch({ type: EMPLOYEE_CREATE });

    ToastAndroid.showWithGravity('Utente creato correttamente!', 
     ToastAndroid.SHORT, ToastAndroid.BOTTOM    
    );

    Actions.employeeList({ type: 'reset' });
   });
 };
};

export const employeesFetch = () => {
 const { currentUser } = firebase.auth();
 
 return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
   .on('value', snapshot => {
    dispatch({ type: EMPLOYEES_FETCH, payload: snapshot.val() });
   });
 };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
 const { currentUser } = firebase.auth();
 
 return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
   .set({ name, phone, shift })
   .then(() => {
    dispatch({ type: EMPLOYEE_SAVE });

    ToastAndroid.showWithGravity('La modifica è avvenuta correttamente!', 
     ToastAndroid.SHORT, ToastAndroid.BOTTOM    
    );    

    Actions.employeeList({ type: 'reset' });
   });
 };
};

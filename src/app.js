import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
 componentWillMount() {
  if (firebase.apps.length === 0) {
   const config = {
    apiKey: 'AIzaSyCgUWjmYr_ff73u0qEI9HPHYK9ZHmCkCrg',
    authDomain: 'manager-e27b4.firebaseapp.com',
    databaseURL: 'https://manager-e27b4.firebaseio.com',
    storageBucket: 'manager-e27b4.appspot.com',
    messagingSenderId: '1065039811181'
   };

   firebase.initializeApp(config);  
  }
 }

 render() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
   <Provider store={store}>
    <Router />
   </Provider>
  );	
 }	
}

export default App;

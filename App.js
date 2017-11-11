import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase';
import Router from './src/Router';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyB74vbyGtxmKAPoY68DxRjKcBd-KzRYD4o",
      authDomain: "sandbox-27e95.firebaseapp.com",
      databaseURL: "https://sandbox-27e95.firebaseio.com",
      projectId: "sandbox-27e95",
      storageBucket: "sandbox-27e95.appspot.com",
      messagingSenderId: "1011131310270"
    };
    
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const uid = firebase.auth().currentUser.uid;

    return dispatch => {        
        firebase.database().ref(`/users/${uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
                Actions.employeeList({ type: 'reset' });
                dispatch({ type: EMPLOYEE_CREATE });           
            });
        
    }
}

export const employeesFetch = () => {
    const uid = firebase.auth().currentUser.uid;

    return dispatch => {
        firebase.database().ref(`/users/${uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()})
            });
    };
};

export const clearEmployeeForm = () => {
    return {
        type: EMPLOYEE_SAVE_SUCCESS
    }
}

export const employeeSave = ({ name, phone, shift, employeeID }) => {
    const uid = firebase.auth().currentUser.uid;

    return dispatch => {
        firebase.database().ref(`/users/${uid}/employees/${employeeID}`)
            .set({name, phone, shift})
            .then(() => {
                Actions.employeeList({ type: 'reset' });                
            });
    }
};

export const employeeDelete = employeeID => {
    const uid = firebase.auth().currentUser.uid;
    
        return () => {
            firebase.database().ref(`/users/${uid}/employees/${employeeID}`)
                .remove()
                .then(() => Actions.employeeList({ type: 'reset' })); 
        }
}
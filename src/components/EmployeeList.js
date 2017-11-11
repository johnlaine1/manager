import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions'
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends React.Component {
    componentWillMount() {
        this.props.employeesFetch();
    }

    render() {
        const { employees } = this.props;

        if (employees.length !== 0) {
            return (                
                <FlatList 
                    data={employees}
                    renderItem={({ item }) => <EmployeeListItem employee={item}/>}
                />            
            );
        }

        return <Text>There are no employees yet.</Text>;
    }
}

const mapStateToProps = state => {
    // Convert employees from an object to an array and add a 'key' property
    // which is the firebase id
    const employees = Object.keys(state.employees).map(id => { 
        return {...state.employees[id], key: id};
    });


    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
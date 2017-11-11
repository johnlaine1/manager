import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends React.Component {
    render() {
        const { name, phone, shift, employeeUpdate } = this.props;
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return (
        <View>
            <CardSection>
                <Input
                    label='Name'
                    placeholder='John Doe'
                    value={name}
                    onChangeText={value => employeeUpdate({prop: 'name', value})}
                />
            </CardSection>

            <CardSection>
                <Input
                    label='Phone'
                    placeholder='555-555-5555'
                    value={phone}
                    onChangeText={value => employeeUpdate({prop: 'phone', value})}
                />
            </CardSection>

            <CardSection style={{ flexDirection: 'column' }}>
                <Text style={styles.pickerTitle}>Shift</Text>
                <Picker 
                    selectedValue={shift}
                    onValueChange={value => employeeUpdate({prop: 'shift', value})}
                >
                    {days.map(day => <Picker.Item label={day} value={day} key={day}/>)}

                </Picker>   
            </CardSection>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerTitle: {
        fontSize: 18,
        textAlign: 'center'
    }
});

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm) ;
import React from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeSave, employeeUpdate, clearEmployeeForm, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';


class EmployeeEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalIsVisible: false };
    }
    componentWillMount() {        
        const { employee, employeeUpdate } = this.props;
        const { name, phone, shift } = employee;

        Object.keys(employee).forEach(prop => {
            employeeUpdate({ prop, value: employee[prop] })
        });

    }
    componentWillUnmount() {
        this.props.clearEmployeeForm();
    }
    onButtonPress() {
        const { name, phone, shift, employeeSave } = this.props;        
        employeeSave({ name, phone, shift, employeeID: this.props.employee.key });
    }
    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }
    onDeletePress() {
        const { employee, employeeDelete } = this.props;
        employeeDelete(employee.key);
    }
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({ modalIsVisible: !this.state.modalIsVisible})}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.modalIsVisible}
                    onAccept={this.onDeletePress.bind(this)}
                    onDecline={() => this.setState({ modalIsVisible: !this.state.modalIsVisible})}
                >
                    Are you sure that you want to fire this employee?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }
}
export default connect(mapStateToProps, { employeeSave, employeeUpdate, clearEmployeeForm, employeeDelete })(EmployeeEdit);
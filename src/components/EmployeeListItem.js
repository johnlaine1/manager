import React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux'

class EmployeeListItem extends React.Component {
    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }
    render() {
        const { employee } = this.props;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.name}>
                            {employee.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>      
        );
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default EmployeeListItem;
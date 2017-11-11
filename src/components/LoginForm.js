import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        // Bindings
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
    }
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password, loginUser } = this.props;
        loginUser({ email, password });
    }
    renderLoginError() {
        if (this.props.error) {
            return (
                <Text style={styles.errorMessage}>
                    {this.props.error.message}
                </Text>
            );
        }
        return null;
    }
    renderButton() {
        if (this.props.isLoading) {
            return <Spinner size='large'/>
        }
        
        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        );
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input                        
                        label='Email'
                        placeholder='Email'
                        value={this.props.email}
                        onChangeText={this.onEmailChange}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        placeholder='Password'
                        value={this.props.password}
                        onChangeText={this.onPasswordChange}
                        secureTextEntry
                    />
                </CardSection>
                {this.renderLoginError()}
                <CardSection>                    
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        alignSelf: 'center'
    }
});

const mapStateToProps = state => {
    const { email, password, error, isLoading } = state.auth;
    return {
        email,
        password,
        error,
        isLoading
    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);


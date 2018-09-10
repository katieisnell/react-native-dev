import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '', loading: 'true' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Authentification failed.',
      loading: false
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />;
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            placeholder={'Your email address'}
            label={'Email'}
            secureTextEntry={false} // Don't need this line, as if we don't include the prop it will automatically be false
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input 
            placeholder={'********'}
            label={'Password'}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection> 
        <CardSection>
          {this.renderButton()}
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;

import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';

import { emailChanged, passwordChanged } from './actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Card title="Login/Signup">
					<Text> Email : </Text>
					<TextInput
						label="Email:"
						maxLength={40}
						placeholder="username@domain.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
					<Text> Password : </Text>
					<TextInput
						label="Password"
						maxLength={12}
						secureTextEntry
						placeholder="Your Password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
					<Button title="Submit" />
				</Card>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(
	LoginForm
);

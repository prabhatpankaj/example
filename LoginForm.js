import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';

import { emailChanged, passwordChanged, loginUser } from './actions';

class LoginForm extends Component {
	static navigationOptions = {
		title: 'Aptence'
	};

	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onButtonPress() {
		const { email, password, navigation } = this.props;

		this.props.loginUser({ email, password, navigation });
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
					<Text
						style={{
							fontSize: 20,
							alignSelf: 'center',
							color: 'red'
						}}
					>
						{this.props.error}
					</Text>
					<Button
						title="Submit"
						onPress={this.onButtonPress.bind(this)}
						loading={this.props.loading}
						backgroundColor="#03A9F4"
					/>
				</Card>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading
	};
};

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	loginUser
})(LoginForm);

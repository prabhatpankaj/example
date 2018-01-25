import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Welcome',
		headerLeft: null
	});

	onButtonPress = () => {
		firebase
			.auth()
			.signOut()
			.then(res => console.log('logged out!'));

		this.props.navigation.navigate('main');
	};

	render() {
		return (
			<View>
				<Text> Welcome! </Text>
				<Button
					title="Log Out"
					large
					backgroundColor="#03A9F4"
					onPress={this.onButtonPress}
				/>
			</View>
		);
	}
}

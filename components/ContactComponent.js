import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";

class Contact extends Component {

	render() {
        return (<ScrollView></ScrollView>);
	}

	//Set title
	static navigationOptions = {
		title: "Contact Us",
	};
}

export default Contact;

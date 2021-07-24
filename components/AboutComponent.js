import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";

class About extends Component {
	render() {
		return <ScrollView></ScrollView>;
	}

	//Set title
	static navigationOptions = {
		title: "About Us",
	};
}

export default About;

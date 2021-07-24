import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";

class Contact extends Component {

	render() {
        return (
					<ScrollView>
						<Card title='Contact Information' wrapperStyle={{margin: 20}}>
							<Text>1 Nucamp Way</Text>
							<Text>Seattle, WA 98001</Text>
							<Text style={{ marginBottom: 10 }}>U.S.A.</Text>
							<Text>Phone: 1-206-555-1234</Text>
							<Text>Email: campsites@nucamp.co</Text>
						</Card>
					</ScrollView>
				);
	}

	//Set title
	static navigationOptions = {
		title: "Contact Us",
	};
}

export default Contact;

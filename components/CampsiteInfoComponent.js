import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";

function RenderCampsite({ campsite }) {
	//Check if empty truthy
	if (campsite) {
		return (
			<Card
				featuredTitle={campsite.name}
				image={require("./images/react-lake.jpg")}
			>
				<Text style={{ margin: 10 }}>{campsite.description}</Text>
			</Card>
		);
	}
	//Falsy not a valid campsite
	return <View />;
}

class CampsiteInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			campsites: CAMPSITES,
		};
	}
	//Set title
	static navigationOptions = {
		title: "Campsite Information",
	};

	render() {
		//Receive the parameter id
		const campsiteId = this.props.navigation.getParam("campsiteId");
		//Pull out campsite object from array with filter
		//Array index of zero
		const campsite = this.state.campsites.filter(
			(campsite) => campsite.id === campsiteId
		)[0];
		return <RenderCampsite campsite={campsite} />;
	}
}

export default CampsiteInfo;

import React, { Component } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";



//Function: receives state as a prop and returns partner data
//Grab only desired part of state
//Pass to connect later
const mapStateToProps = (state) => {
	return {
		partners: state.partners,
	};
};

function Mission() {
	return (
		<Card title='Our Mission'>
			<Text style={{ margin: 10 }}>
				We present a curated database of the best campsites in the vast woods
				and backcountry of the World Wide Web Wilderness. We increase access to
				adventure for the public while promoting safe and respectful use of
				resources. The expert wilderness trekkers on our staff personally verify
				each campsite to make sure that they are up to our standards. We also
				present a platform for campers to share reviews on campsites they have
				visited with each other.
			</Text>
		</Card>
	);
}

class About extends Component {
	static navigationOptions = {
		title: "About Us",
	};

	render() {
		const renderPartner = ({ item }) => {
			return (
				<ListItem
					title={item.name}
					subtitle={item.description}
					leftAvatar={{ source: { uri: baseUrl + item.image } }}
				/>
			);
		};


    if (this.props.partners.isLoading) {
		return (
			<ScrollView>
				<Mission />
				<Card title='Community Partners'>
					<Loading />
				</Card>
			</ScrollView>
		);
 	}
 	if (this.props.partners.errMess) {
		return (
			<ScrollView>
				<Mission />
				<Card title='Community Partners'>
					<Text>{this.props.partners.errMess}</Text>
				</Card>
			</ScrollView>
		);
 	}

		return (
			<ScrollView>
				<Mission />
				<Card title='Community Partners'>
					<FlatList
						data={this.props.partners.partners}
						renderItem={renderPartner}
						keyExtractor={(item) => item.id.toString()}
					/>
				</Card>
			</ScrollView>
		);
	}
}

//Connect to the redux store.
//Pass the map state to props function
//Make sure About component receives partner props from redux store.
export default connect(mapStateToProps)(About);

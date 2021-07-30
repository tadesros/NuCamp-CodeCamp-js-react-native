import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { Card,Icon } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { COMMENTS } from "../shared/comments";


//RenderCampsite Component
//Pass in entire props
function RenderCampsite(props) {

    //De-structure campsite from props
	const { campsite } = props;

	//Check if empty truthy
	if (campsite) {
		return (
			<Card
				featuredTitle={campsite.name}
				image={require("./images/react-lake.jpg")}
			>
				<Text style={{ margin: 10 }}>{campsite.description}</Text>
				<Icon
					name={props.favorite ? "heart" : "heart-o"}
					type='font-awesome'
					color='#f50'
					raised
					reverse
					onPress={() =>
						props.favorite
							? console.log("Already set as a favorite")
							: props.markFavorite()
					}
				/>
			</Card>
		);
	}
	//Falsy not a valid campsite
	return <View />;
}

//RenderComments Component
//Functional send comments array de-structured
function RenderComments({ comments }) {
	
	//Function to renderCommentItem 
	const renderCommentItem = ({ item }) => {
		return (
			<View style={{ margin: 10 }}>
				<Text style={{ fontSize: 14 }}>{item.text}</Text>
				<Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
				<Text
					style={{ fontSize: 12 }}
				>{`-- ${item.author}, ${item.date}`}</Text>
			</View>
		);
	};

    return (
			<Card title='Comments'>
				<FlatList
				data={comments}
				//Call Render Comment Item above
					renderItem={renderCommentItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			</Card>
		);
}
//Campsite Class Component
class CampsiteInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			campsites: CAMPSITES,
			comments: COMMENTS,
			//Current campsite favorite
			favorite: false
		};
	}
    //Event handler toggle site marked favorite
	markFavorite() {
		this.setState({favorite: true });
	}
	//Set title
	static navigationOptions = {
		title: "Campsite Information",
	}

	render() {
		console.log("This is the test");
		//Receive the parameter id
		const campsiteId = this.props.navigation.getParam("campsiteId");
		//Pull out campsite object from array with filter
		//Array index of zero
		const campsite = this.state.campsites.filter(
			(campsite) => campsite.id === campsiteId
		)[0];
		//Set up campsites variable filter out irrelevant records
		const comments = this.state.comments.filter(
			(comment) => comment.campsiteId === campsiteId
		);
		return (
			<ScrollView>
				<RenderCampsite
					campsite={campsite}
					favorite={this.state.favorite}
					markFavorite={() => this.markFavorite()}
				/>
				<RenderComments comments={comments} />
			</ScrollView>
		);
	}
}

export default CampsiteInfo;

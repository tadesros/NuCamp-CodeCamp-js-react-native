import * as ActionTypes from "./ActionTypes";

export const favorites = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.ADD_FAVORITE:
			//Check if exists if so return true
			if (state.includes(action.payload)) {
				//Return previous state
				return state;
			}
			//Return new state with concactenation
			return state.concat(action.payload);

		default:
			//return previous state
			return state;
	}
};

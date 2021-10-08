import { ADD_MOVIE } from "../actions/movieActions";

// import {ADD_FAVORITE} from ""
const initialState = {
    favorites: [
        {
            title: "Movie",
            id: 1
        }
    ],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MOVIE:
            return state;
        default:
            return state;
    }
}

export default favoritesReducer;
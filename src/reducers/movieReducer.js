import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            console.log("ADD_MOVIE fired")
            return {
                ...state,
                movies: [...movies]
                // movies: [{
                //     id: state.movies.length + 1,
                //     title: movies.title.payload,
                //     director: movies.director.payload,
                //     metascore: movies.metascore.payload,
                //     genre: movies.genre.payload,
                //     description: movies.description.payload
                //   }]
            }
        default:
            return state;

    }
}

export default reducer;
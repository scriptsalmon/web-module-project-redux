export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

// export const addMovie = (title, director, metascore, genre, description)=>{
//     return({type: ADD_MOVIE,
//         title: title.payload,
//         director: director.payload,
//         metascore: metascore.payload,
//         genre: genre.payload,
//         description: description.payload})
// }

export const addMovie = (movie)=>{
    return({type: ADD_MOVIE, payload:movie})
}
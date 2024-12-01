import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieData } from "../interfaces/movie.interface";
import { loadFromLocalStorage, saveToLocalStorage } from "./storage";




interface MovieState {
	movies: IMovieData[]
}

const initialState: MovieState = {
	movies: loadFromLocalStorage().movies
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState, 
	reducers: {
		clear: (state) => {
			state.movies = [];
		},
		toogle: (state, action: PayloadAction<IMovieData>) => {
			const movie = state.movies.find(i => i.id === action.payload.id);
			if(!movie){
				state.movies.push(action.payload)
			} else {
				state.movies = state.movies.filter(i => i.id !== action.payload.id)
			}					
			saveToLocalStorage(state.movies);
		},	
		load: (state) => {
			state.movies = loadFromLocalStorage().movies;
		}		
	}
})

export default movieSlice.reducer;
export const movieActions = movieSlice.actions;
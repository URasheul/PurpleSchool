import { createSlice } from "@reduxjs/toolkit";
import { IMovieData } from "../interfaces/movie.interface";
import { loadFromLocalStorage } from "./storage";
import { clear } from "console";

interface IUser {
	name: string;
	isLogined: boolean;	
}

const initialState: IUser = {
	name: '',
	isLogined: false,	
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		load: (state) => {
			state.name = loadFromLocalStorage().name;
			state.isLogined = loadFromLocalStorage().isLogined;
		},
		clear: (state) => {
			state = initialState;
		}
	}
}
)

export default userSlice.reducer;
export const userActions = userSlice.actions;
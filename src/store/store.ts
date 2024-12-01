import { configureStore } from "@reduxjs/toolkit";
import  movieSlice  from "./movie.slice";
import userSlice from "./user.slice";
import searchSlice from "./search.slice";

export const store = configureStore({
	reducer: {
		movie: movieSlice,
		user: userSlice,
		search: searchSlice
	}	
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
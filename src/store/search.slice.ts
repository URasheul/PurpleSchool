import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearch {
	value: string
}

const initialState: ISearch = {
	value: ''
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		set: (state, action: PayloadAction<string | undefined>) => {
			if(!action.payload){					
				return;			
			}
			state.value = action.payload;			
		},
		clear: (state) => {
			state.value = '';			
		}
	}
});

export default searchSlice.reducer;
export const searchActions = searchSlice.actions;
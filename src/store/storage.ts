import { IUserData } from "../Components/LoginForm/LoginFormProps";
import { IMovieData } from "../interfaces/movie.interface";


const initialState: IUserData = {
	name: '',
	isLogined: false,
	movies: []
}

export const saveToLocalStorage = (data: IMovieData[]) => {
	const storage = localStorage.getItem('userData');
	if(storage){
		const loginedUserStorage: IUserData = JSON.parse(storage).map((i: IUserData) => {
			if(i.isLogined) {
				i.movies = data;
			}
			return i;
		});
		localStorage.setItem('userData', JSON.stringify(loginedUserStorage));
		
	}	
}

export const loadFromLocalStorage = () => {

	const storage = localStorage.getItem('userData');
	if(storage) {
		const data: IUserData[] = JSON.parse(storage);
		const loginedUser = data.find(i => i.isLogined);
		if(loginedUser){
			return loginedUser 
		}
		 return initialState;
	}	
	return initialState;
}
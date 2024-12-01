import { FormHTMLAttributes } from "react";
import { IMovieData } from "../../interfaces/movie.interface";

export interface LoginFormProps extends FormHTMLAttributes<HTMLFormElement> {
	title: string;
	buttonTitle: string;
	clickFunc: ()=>void;
	inputChange: ()=>void;
}

export interface IUserData {	
	name : string;
	isLogined : boolean;
	movies: IMovieData[];  	
};
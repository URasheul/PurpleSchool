import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isSearch?: boolean;
	inputChange: (...args:any)=> void;
	clickFunc?: (...args:any)=> void;
}
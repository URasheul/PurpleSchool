import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isSearch?: boolean;
	inputChange: ()=> void;
	clickFunc?: ()=> void;
}
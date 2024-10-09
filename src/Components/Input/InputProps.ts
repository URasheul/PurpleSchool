import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isSearch?: 'default' | 'search';
	onChange: (...args:any)=> void;
	onClick?: (...args:any)=> void;
}
import { ParamHTMLAttributes } from "react";

export interface CardRatingProps extends ParamHTMLAttributes<HTMLElement> {
	rating?: number | string;	
}
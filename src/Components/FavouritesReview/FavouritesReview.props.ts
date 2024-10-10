import { ParamHTMLAttributes } from "react";

export interface FavouritesReviewProps extends ParamHTMLAttributes<HTMLElement> {
	title: string;
	date: string;
	text: string;
} 
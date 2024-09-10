import { ParamHTMLAttributes } from "react";

export interface CardProps {
	inFavourites?: boolean;
	title: string;
	rating?: number;
	poster?: string;
	id: number;
}
import { ParamHTMLAttributes } from "react";

export interface CardProps {
	inFavourites?: boolean;
	title: string;
	rating?: number | string;
	poster?: string;
	id: number | string;
}
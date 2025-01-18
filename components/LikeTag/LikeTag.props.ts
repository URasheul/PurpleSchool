import { HTMLAttributes } from "react";

export interface LikeTagProps extends HTMLAttributes<HTMLElement> {	
	likeCount: number;
}
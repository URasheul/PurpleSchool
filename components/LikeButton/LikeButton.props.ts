import { HTMLAttributes } from "react";

export interface LikeButtonProps extends HTMLAttributes<HTMLButtonElement> {	
	isClicked: boolean;
	onLikeClick: (id: number, isLiked: boolean) => Promise<void>;

}
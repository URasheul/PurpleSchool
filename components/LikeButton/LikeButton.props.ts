import { HTMLAttributes } from "react";

export interface LikeButtonProps extends HTMLAttributes<HTMLButtonElement> {	
	isClicked: boolean;
}
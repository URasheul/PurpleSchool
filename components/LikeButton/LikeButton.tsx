"use client"

import { LikeButtonProps } from './LikeButton.props';
import styles from "./LikeButton.module.css";
import LikeIcon from "@/public/like-icon.svg";
import cn from "classnames";
import { useState } from 'react';


export function LikeButton({isClicked = false, onLikeClick} : LikeButtonProps): JSX.Element {

	const [isLiked, setIsLiked] = useState<boolean>(isClicked);
	

	const likeClick = () => {
		setIsLiked(!isLiked);
		onLikeClick(1, isLiked);
	};
 
	return (
		<button className={cn(styles.button, {[styles.clicked] : isLiked})} onClick={likeClick}>			
			<LikeIcon className={cn({[styles.icon] : isLiked})}/>
		</button>
	)
}


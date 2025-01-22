"use client"

import cn from "classnames";
import { useState } from 'react';
import LikeIcon from "@/public/like-icon.svg";
import { JsonPlaceholderClient } from '@/api/ApiClient';
import styles from "./LikeButton.module.css";
import { LikeButtonProps } from './LikeButton.props';

const apiHandler = new JsonPlaceholderClient();

export function LikeButton({isClicked = false, postId} : LikeButtonProps): JSX.Element {

	const [isLiked, setIsLiked] = useState<boolean>(isClicked);
	

	const likeClick = () => {
		setIsLiked(!isLiked);
		apiHandler.LikeHandler(postId, isLiked);
	};
 
	return (
		<button className={cn(styles.button, {[styles.clicked] : isLiked})} onClick={likeClick}>			
			<LikeIcon className={cn({[styles.icon] : isLiked})}/>
		</button>
	)
}
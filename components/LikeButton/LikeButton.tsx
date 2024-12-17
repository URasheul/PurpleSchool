import { LikeButtonProps } from './LikeButton.props';
import styles from "./LikeButton.module.css";
import LikeIcon from "@/public/like-icon.svg";
import cn from "classnames";


export function LikeButton({isClicked} : LikeButtonProps): JSX.Element {
 
	return (
		<button className={cn(styles.button, {[styles.clicked] : isClicked})}>			
			<LikeIcon className={cn({[styles.icon] : isClicked})}/>
		</button>
	)
}


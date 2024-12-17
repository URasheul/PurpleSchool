import { LikeTagProps } from './LikeTag.props';
import styles from "./LikeTag.module.css";
import LikeIcon from "@/public/like-icon.svg";


export function LikeTag({ likeCount} : LikeTagProps): JSX.Element {
 
	return (
		<div className={styles.main}>
			<span className={styles.text}>{likeCount}</span>
			<LikeIcon className={styles.icon}/>
		</div>
	)
}


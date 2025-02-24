import { CommentProps } from "./Comment.props";
import styles from "./Comment.module.css";

import { Paragraph } from "../Paragraph/Paragraph";



export function Comment({name, email, body}: CommentProps) {

	return (
		<div className={styles.comment}>
			<div className={styles.commentHeader}>
				<span className={styles.name}>{name}</span>
				<span className={styles.dot}>&#183;</span>
				<span className={styles.email}>{email}</span>
			</div>
			<Paragraph size="m">{body}</Paragraph>
		</div>
	)
}
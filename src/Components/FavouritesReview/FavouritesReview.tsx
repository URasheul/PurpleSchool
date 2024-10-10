import styles from './FavouritesReview.module.css';
import { FavouritesReviewProps } from './FavouritesReview.props';



function FavouritesReview({title, date, text}:FavouritesReviewProps){	
	return (
	<div className={styles.review}>
		<div className={styles.header}>
			<h3 className={styles.title}>{title}</h3>
			<span className={styles.date}>{date}</span>
		</div>
		<p className={styles.content}>{text}</p>
	</div>
	)
} 

export default FavouritesReview; 
import styles from './FavouritesReview.module.css';
import { FavouritesReviewProps } from './FavouritesReview.props';
import cn from 'classnames';


function FavouritesReview({title, date, text, className}:FavouritesReviewProps){
	
	return (
	<div className={styles.review}>
		<div className={styles.header}>
			<h3 className={cn(styles.title, className)}>{title}</h3>
			<span className={styles.date}>{date}</span>
		</div>
		<p className={styles.content}>{text}</p>
	</div>
	)
} 

export default FavouritesReview; 
import styles from './FavouritesReview.module.css';
import { FavouritesReviewProps } from './FavouritesReview.props';



function FavouritesReview({title, date, text}:FavouritesReviewProps){	
	return (
	<div className={styles['review']}>
		<div className={styles['header']}>
			<div className={styles['title']}>{title}</div>
			<div className={styles['date']}>{date}</div>
		</div>
		<p className={styles['content']}>{text}</p>
	</div>
	)
} 

export default FavouritesReview; 
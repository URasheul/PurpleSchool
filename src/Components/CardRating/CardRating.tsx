import { CardRatingProps } from "./CardRating.props";
import styles from './CardRating.module.css'
import cn from 'classnames';

function CardRating({rating = 0, className}:CardRatingProps) {
	
	return (
	<div className={cn(styles['cardRating'], className)}>
					<img src='/public/rating-icon.svg' alt='рейтинг'/>
					{rating}
				</div> 
	)
}

export default CardRating;
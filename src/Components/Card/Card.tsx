import AddToFavouritesButton from '../AddToFavouritesButton/AddToFavouritesButton';
import styles from './Card.module.css';
import { memo } from 'react';
import { CardProps } from './CardProps';
import CardRating from '../CardRating/CardRating';
import { Link } from 'react-router-dom';

const Card = memo(function Card({inFavourites, title, rating, poster, id}: CardProps){	

	return (
		<Link to={`/movie/${id}`} className={styles.card}>
			<div className={styles['card__poster']}>
				<img className={styles['card__image']} src={poster} alt='Постер фильма'/>
				<CardRating className={styles['card__rating']} rating={rating} />				
			</div>
			<div className={styles['card__footer']}>
				<h3 className={styles['card__title']}>{title}</h3>	
				{inFavourites 
					? <AddToFavouritesButton inFavourites/> 
					: <AddToFavouritesButton />}			
			</div>
		</Link>
	);
} );

export default Card; 
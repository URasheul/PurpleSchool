import AddToFavouritesButton from '../AddToFavouritesButton/AddToFavouritesButton';
import styles from './Card.module.css';
import { BaseSyntheticEvent, memo } from 'react';
import CardRating from '../CardRating/CardRating';
import { Link } from 'react-router-dom';
import { IMovieData } from '../../interfaces/movie.interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { movieActions } from '../../store/movie.slice';

const Card = memo(function Card({title, rating, poster, id}: IMovieData){	

	const dispatch = useDispatch<AppDispatch>();
	const inFavourites = useSelector((s: RootState) => s.movie.movies)

	function removeAddToFavourites(e: BaseSyntheticEvent){
		e.preventDefault();
		dispatch(movieActions.toogle({title, rating, poster, id}))
	}
	
	return (
		<Link to={`/movie/${id}`} className={styles.card}>
			<div className={styles['card__poster']}>
				<img className={styles['card__image']} src={poster} alt='Постер фильма'/>
				<CardRating className={styles['card__rating']} rating={rating} />				
			</div>
			<div className={styles['card__footer']}>
				<h3 className={styles['card__title']}>{title}</h3>	
				{inFavourites.find(i => i.id === id) 
					? <AddToFavouritesButton onClick={removeAddToFavourites} inFavourites={true}/> 
					: <AddToFavouritesButton onClick={removeAddToFavourites}/>}			
			</div>
		</Link>
	);
	
} );

export default Card; 
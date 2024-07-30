import AddToFavouritesButton from '../AddToFavouritesButton/AddToFavouritesButton';
import './Card.css';

function Card({inFavourites, title, rating, poster}){
	
	return (
		<div className="card">
			<div className='card__poster'>
				<img className='card__image' src={poster} alt='Постер фильма'/>
				<div className='card__rating'>
					<img src='/public/rating-icon.svg' alt='рейтинг'/>
					{rating}
				</div>
			</div>
			<div className='card__footer'>
				<h3 className='card__title'>{title}</h3>	
				{inFavourites 
					? <AddToFavouritesButton inFavourites/> 
					: <AddToFavouritesButton />}			
			</div>
		</div>
	);
} 

export default Card; 
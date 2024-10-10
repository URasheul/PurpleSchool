import { useLoaderData} from "react-router-dom";
import AddToFavouritesButton from "../../Components/AddToFavouritesButton/AddToFavouritesButton";
import CardRating from "../../Components/CardRating/CardRating";
import FavouritesHeader from "../../Components/FavouritesHeader/FavouritesHeader";
import FavouritesReview from "../../Components/FavouritesReview/FavouritesReview";
import styles from "./Movie.module.css";

function Movie() {

	const movieData = useLoaderData() as Record<string,any>;
	console.log(movieData);
	
	
	return (
		<div className={styles['movie']}>
			<FavouritesHeader title={movieData.nameRu}/>
			<div className={styles['content']}>
				<img className={styles['poster']} src={movieData.posterUrl} alt="постер фильма"/>
				<div className={styles['information']}>
					<p className={styles['description']}>{movieData.description}</p>
					<div className={styles['rating']}>
					<CardRating rating={movieData.ratingKinopoisk}/>
					<AddToFavouritesButton/>
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Страна'}</span>
						<span className={styles['stats-value']}>{movieData.countries.map((i: Record<string, string>) => i['country']).join(', ')}</span>						
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Год выхода'}</span>
						<span className={styles['stats-value']}>{movieData.year}</span>						
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Длительность'}</span>
						<span className={styles['stats-value']}>{movieData.filmLength} мин</span>						
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Жанр'}</span>
						<span className={styles['stats-value']}>{movieData.genres.map((i: Record<string, string>) => i['genre']).join(', ')}</span>						
					</div>

				</div>
			</div>
			<div className={styles['footer']}>
			<span className={`${styles['stat-title']} ${styles['stat-title-foter']}`}>{'Отзывы'}</span>
			<FavouritesReview title={'Not as good as infinity war..'} date={'2019-04-29'} text={''}/>
			</div>
		</div>
	)
};

export default Movie; 
import { useLoaderData} from "react-router-dom";
import AddToFavouritesButton from "../../Components/AddToFavouritesButton/AddToFavouritesButton";
import CardRating from "../../Components/CardRating/CardRating";
import FavouritesHeader from "../../Components/FavouritesHeader/FavouritesHeader";
import FavouritesReview from "../../Components/FavouritesReview/FavouritesReview";
import styles from "./Movie.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { movieActions } from "../../store/movie.slice";
import { RefObject, SyntheticEvent, useEffect, useRef } from "react";
import { title } from "process";

function Movie() {

	const movieData = useLoaderData() as Record<string,any>;	
	const movieList = useSelector((s: RootState) => s.movie.movies);
	const isFavourites = movieList.find(i => i.id === movieData.kinopoiskId);
	const dispatch = useDispatch<AppDispatch>();
	
	useEffect(() => {		
		window.scrollTo(0, 80)
	},[])

	const onClick = (e: SyntheticEvent) => {
		dispatch(movieActions.toogle({
			title: movieData.nameRu,
			id: movieData.kinopoiskId,
			rating: movieData.ratingKinopoisk,
			poster: movieData.posterUrl		
		}))
	}		
		
	return (
		<div className={styles['movie']}>
			<FavouritesHeader title={movieData.nameRu}/>
			<div className={styles['content']}>
				<img className={styles['poster']} src={movieData.posterUrl} alt="постер фильма"/>
				<div className={styles['information']}>
					<p className={styles['description']}>{movieData.description}</p>
					<div className={styles['rating']}>
					<CardRating rating={movieData.ratingKinopoisk}/>
					<AddToFavouritesButton onClick={onClick} inFavourites={!!isFavourites}/>
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
			{movieData.reviewsList.items.map((i: {title: string, date: string, description: string, kinopoiskId: number, type: 'NEUTRAL' |'NEGATIVE'|'POSITIVE'}) => {
				return <FavouritesReview
				className={styles[`${i.type}`]}
				type={i.type} 
				key={i.kinopoiskId}
				title={i.title} 
				text={i.description}
				date={
					Intl.DateTimeFormat('ru-RU', {
						dateStyle:'short'						
					}).format(new Date(i.date))					
				} 
				/>				
			})
			}
			</div>
			
		</div>
	)
};

export default Movie; 
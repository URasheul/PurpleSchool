import { useParams } from "react-router-dom";
import AddToFavouritesButton from "../../Components/AddToFavouritesButton/AddToFavouritesButton";
import CardRating from "../../Components/CardRating/CardRating";
import FavouritesHeader from "../../Components/FavouritesHeader/FavouritesHeader";
import FavouritesReview from "../../Components/FavouritesReview/FavouritesReview";
import styles from "./Movie.module.css";
import {AvangersData} from "./fixtures/avengers.data.js";


function Movie() {
	const {id} = useParams();	

	
	return (
		<div className={styles['movie']}>
			<FavouritesHeader title={'Avengers: Endgame'}/>
			<div className={styles['content']}>
				<img className={styles['poster']} src={AvangersData.image} alt="постер фильма"/>
				<div className={styles['information']}>
					<p className={styles['description']}>{AvangersData.text}</p>
					<div className={styles['rating']}>
					<CardRating rating={AvangersData.rating}/>
					<AddToFavouritesButton/>
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Тип'}</span>
						<span className={styles['stats-value']}>{AvangersData.type}</span>						
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Дата выхода'}</span>
						<span className={styles['stats-value']}>{AvangersData.date}</span>						
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Длительность'}</span>
						<span className={styles['stats-value']}>{AvangersData.timeDuration} мин</span>						
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Жанр'}</span>
						<span className={styles['stats-value']}>{AvangersData.genre}</span>						
					</div>

				</div>
			</div>
			<div className={styles['footer']}>
			<span className={`${styles['stat-title']} ${styles['stat-title-foter']}`}>{'Отзывы'}</span>
			<FavouritesReview title={'Not as good as infinity war..'} date={'2019-04-29'} text={AvangersData.reviewText}/>
			</div>
		</div>
	)
};

export default Movie; 
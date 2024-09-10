import { useParams } from "react-router-dom";
import AddToFavouritesButton from "../../Components/AddToFavouritesButton/AddToFavouritesButton";
import CardRating from "../../Components/CardRating/CardRating";
import FavouritesHeader from "../../Components/FavouritesHeader/FavouritesHeader";
import FavouritesReview from "../../Components/FavouritesReview/FavouritesReview";
import styles from "./Movie.module.css";
function Movie() {
	const {id} = useParams();
	
	console.log(id);
	

	let image = '../public/posters/avangers-poster.svg';
	let text = `After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.`
	let rating = 239;
	let type = 'Movie';
	let date = '2019-04-24';
	let timeDuration = 181;
	let genre = 'Adventure,  Science Fiction, Action'
	let reviewText = 'But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could&apos;ve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...'


	return (
		<div className={styles['movie']}>
			<FavouritesHeader title={'Avengers: Endgame'}/>
			<div className={styles['content']}>
				<img className={styles['poster']} src={image} alt="постер фильма"/>
				<div className={styles['information']}>
					<p className={styles['description']}>{text}</p>
					<div className={styles['rating']}>
					<CardRating rating={rating}/>
					<AddToFavouritesButton/>
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Тип'}</span>
						<span className={styles['stats-value']}>{type}</span>						
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Дата выхода'}</span>
						<span className={styles['stats-value']}>{date}</span>						
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Длительность'}</span>
						<span className={styles['stats-value']}>{timeDuration} мин</span>						
					</div>
					<div className={styles['stats']}>
						<span className={styles['stat-title']}>{'Жанр'}</span>
						<span className={styles['stats-value']}>{genre}</span>						
					</div>

				</div>
			</div>
			<div className={styles['footer']}>
			<span className={`${styles['stat-title']} ${styles['stat-title-foter']}`}>{'Отзывы'}</span>
			<FavouritesReview title={'Not as good as infinity war..'} date={'2019-04-29'} text={reviewText}/>
			</div>
		</div>
	)
};

export default Movie; 
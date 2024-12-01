import { useSelector } from "react-redux";
import Headling from "../../Components/Headling/Headling";
import Hero from "../../Components/Hero/Hero";
import styles from "./Favourites.module.css"
import { RootState } from "../../store/store";
import Card from "../../Components/Card/Card";
import { IMovieData } from "../../interfaces/movie.interface";

function Favourites() {

	const movieData = useSelector((s: RootState) => s.movie.movies)

	return (
		<>
		<Headling title={'Избранное'} className={styles.title}/>
		<Hero>
		{	movieData.length ?
			movieData.map((item: IMovieData) => {
				return (
					<Card
					id={item.id}
					title={item.title}
					rating={item.rating ?? ''}
					key={item.id}
					poster={item.poster}						
					/>)
			})
			: <span className={styles.text}>Нет фильмов в избранном</span>
		}
		</Hero>

		</>
	)
};

export default Favourites;
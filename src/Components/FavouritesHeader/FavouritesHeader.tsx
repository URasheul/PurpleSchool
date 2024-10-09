import styles from './FavouritesHeader.module.css';
import { FavouritesHeaderProps } from './FavouritesHeader.props';


function FavouritesHeader({title}: FavouritesHeaderProps){
	
	return (
		<div className={styles.header}>
			<span className={styles.text}>Поиск фильмов</span>
			<h2 className={styles.title}>{title}</h2>
		</div>
	);
} 

export default FavouritesHeader; 
import Headling from "../../Components/Headling/Headling";
import styles from "./Favourites.module.css"

function Favourites() {
	return (
		<>
		<Headling title={'Избранное'} className={styles.title}/>
		</>
	)
};

export default Favourites;
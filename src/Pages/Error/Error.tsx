import Headling from "../../Components/Headling/Headling";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import Paragraph from "../../Components/Paragraph/Paragraph";
import styles from './Error.module.css'

function Error() {
	return (
		<>
		<HeroHeader 
		title={'Поиск'} 
		text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} 		
		/>
		<Headling title={'Упс... Ничего не найдено'} className={styles['headling']}/>
		<Paragraph className={styles['paragraph_20']} text={'Попробуйте изменить запрос или ввести более точное название фильма'}/>
		</>
	)
};

export default Error;
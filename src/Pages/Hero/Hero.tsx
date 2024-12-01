import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Hero from "../../Components/Hero/Hero";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import axios from "axios";
import Error from "../Error/Error";
import cn from "classnames";
import styles from "./Hero.module.css"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { searchActions } from "../../store/search.slice";



function Main() {

	const [movieData, setMovieData] = useState<Record<string,any> | undefined>();	
	const [isLoading, setIsLoading] = useState<boolean>(false);	
	const [userSearchInput, setUserSearchInput] = useState<string>();
	const userSearch = useSelector((state: RootState) => state.search.value)
	const dispatch = useDispatch<AppDispatch>();	

	useEffect(() => {		
		console.log('here');		
		setUserSearchInput(userSearch)
	}, []);

	useEffect(() => {
		searchMovie();	
	}, [userSearchInput]);

	
	function search(input: string | undefined) {						
		setUserSearchInput(input);
		dispatch(searchActions.set(input))			
	}
	

	async function searchMovie() {
		if(userSearchInput){	
			setIsLoading(true);
			const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${userSearchInput}&page=1`,
				{
					headers: {
						'X-API-KEY': '3274ae02-c434-4ed6-946f-eed78ba9cf56',
						'Content-Type': 'application/json',
					}
				})	
				setIsLoading(false);			
				setMovieData(response.data);	
		} 			
	}	

	
	return (
		<>
		<HeroHeader 
		title={'Поиск'} 
		text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
		onSearch={search} 		
		/>							
			<Hero className={cn({[styles.error] : (movieData && movieData.searchFilmsCountResult === 0)})}>				
				{
					isLoading ? 'Загрузка...'
					:(!movieData) 
					? "Введите название фильма" 
					: (movieData.searchFilmsCountResult === 0)
					? <Error/>					
					: movieData.films.map((item: Record<string, any>) => {
						return (
						<Card
						id={item.filmId}
						title={item.nameRu}
						rating={item.rating ?? ''}
						key={item.filmId}
						poster={item.posterUrl}						
						/>)
					})					
				}										
			</Hero>	
		</>
	)
};

export default Main;



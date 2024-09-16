import Card from "../../Components/Card/Card";
import Hero from "../../Components/Hero/Hero";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";


function Main() {

		
	const filmDataList = [
		{
			title: 'Black Widow',
			rating: 324,
			poster: 'public/posters/black-widow-poster.png',
			id: 1
		},
		{
			title: 'F9',
			rating: 1563,
			poster: 'public/posters/f9-poster.jpg',
			id: 2
		},
		{
			title: 'Pulp Fiction',
			rating: 3801,
			poster: 'public/posters/pulp-fiction-poster.jpg',
			id: 3
		},
		{
			title: 'Territory',
			rating: 3801,
			poster: 'public/posters/territory-poster.jpg',
			id: 4
		},
		{
			title: 'Terminator',
			rating: 2669,
			poster: 'public/posters/terminator-poster.jpg',
			id: 5
		},
		{
			title: 'Parker',
			rating: 251,
			poster: 'public/posters/parker-poster.jpg',
			id: 6
		},
		{
			title: 'Joker',
			rating: 1751,
			poster: 'public/posters/joker-poster.jpg',
			id: 7
		},
		{
			title: 'Friends',
			rating: 4900,
			poster: 'public/posters/friends-poster.png',
			id: 8
		}
	];
	


	return (
		<>
		<HeroHeader 
		title={'Поиск'} 
		text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} 		
		/>							
			<Hero>	
				{filmDataList.map((item) => {
					return <Card id={item.id} key={item.id} title={item.title} rating={item.rating} poster={item.poster}/>;
				})}			
			</Hero>	
		</>
	)
};

export default Main;



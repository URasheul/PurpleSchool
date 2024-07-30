import { useState } from 'react';
import './App.css';
import Headling from './Components/Headling/Headling';
import Input from './Components/Input/Input';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Paragraph from './Components/Paragraph/Paragraph';
import HeroHeader from './Components/HeroHeader/HeroHeader';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card';

function App() {
	
	const [isClicked, setIsClicked] = useState(false);
	const [inputData, setInputData] = useState();

	console.log(inputData);
	console.log(isClicked);

	const data = [
		{
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
			buttonTitle: 'Искать'			
		}
	];
	
	const filmDataList = [
		{
			title: 'Black Widow',
			rating: 324,
			poster: 'public/posters/black-widow-poster.png'
		},
		{
			title: 'F9',
			rating: 1563,
			poster: 'public/posters/f9-poster.jpg'
		},
		{
			title: 'Pulp Fiction',
			rating: 3801,
			poster: 'public/posters/pulp-fiction-poster.jpg'
		},
		{
			title: 'Territory',
			rating: 3801,
			poster: 'public/posters/territory-poster.jpg'
		},
		{
			title: 'Terminator',
			rating: 2669,
			poster: 'public/posters/terminator-poster.jpg'
		},
		{
			title: 'Parker',
			rating: 251,
			poster: 'public/posters/parker-poster.jpg'
		},
		{
			title: 'Joker',
			rating: 1751,
			poster: 'public/posters/joker-poster.jpg'
		},
		{
			title: 'Friends',
			rating: 4900,
			poster: 'public/posters/friends-poster.png'
		}
	];


	const isClickFunc = () => {
		setIsClicked(true);
	};	

	const inputChange = (e) => {
		setInputData(e.target.value);
	};


	return (
		<>
			<NavigationBar/>
			<HeroHeader searchInput>
				<Headling title={data[0].title}/>
				<Paragraph 
					text={data[0].text}
					className='paragraph_16'					
				/>
				<Input isSearch={true} inputChange={inputChange} clickFunc={isClickFunc}/>				
			</HeroHeader>	
			<Hero>	
				{filmDataList.map((item, index) => {
					return <Card key={index} title={item.title} rating={item.rating} poster={item.poster}/>;
				})}			
			</Hero>	
		</>
	);
}

export default App;

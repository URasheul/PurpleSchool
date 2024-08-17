import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Headling from './Components/Headling/Headling';
import Input from './Components/Input/Input';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Paragraph from './Components/Paragraph/Paragraph';
import HeroHeader from './Components/HeroHeader/HeroHeader';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card';
import LoginForm from './Components/LoginForm/LoginForm';
import { UserDataContext } from './context/userData.context';

function App() {

	// localStorage.setItem('userData', JSON.stringify([{name : 'Вася', isLogined : false}, {name : 'Катя', isLogined : false}]));
	
	const [loginedUser, setLoginedUser] = useState();
	// const buttonRef = useRef();
	// const [isClicked, setIsClicked] = useState(false);
	// const [inputData, setInputData] = useState();	
	
	

	useEffect(() => {
		const usersData = JSON.parse(localStorage.getItem('userData'));
		if(usersData){
			const user = usersData.find(i => i.isLogined === true);	
			setLoginedUser(user);						
		} else {
			localStorage.setItem('userData', JSON.stringify([]));
		}			
	}, []);	

	
	const isClickFunc = useCallback(function() {
		// setIsClicked(true);
	}, []);	
	
	const inputChange = () => {
		// setInputData(e.target.value);
	};
	
	const data = [
		{
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
			buttonTitle: 'Искать'			
		},
		{
			title: 'Вход',			
			buttonTitle: 'Войти в профиль'			
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



	return (
		
		<UserDataContext loginedUser={loginedUser}>
			<NavigationBar/>
			<HeroHeader searchInput>
				<Headling title={data[0].title}/>
				<Paragraph 
					text={data[0].text}
					className='paragraph_16'					
				/>
				<Input isSearch={true} inputChange={inputChange} clickFunc={isClickFunc}/>				
			</HeroHeader>	
			<LoginForm title={data[1].title} clickFunc={isClickFunc} inputChange={inputChange} buttonTitle={data[1].buttonTitle}/>	
			<Hero>	
				{filmDataList.map((item, index) => {
					return <Card key={index} title={item.title} rating={item.rating} poster={item.poster}/>;
				})}			
			</Hero>	
		</UserDataContext>			
		
	);
}

export default App;

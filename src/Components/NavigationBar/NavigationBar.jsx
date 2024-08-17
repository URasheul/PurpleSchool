import { useContext } from 'react';
import './NavigationBar.css';
import { UserContext } from '../../context/userData.context';

function NavigationBar(){	

	const {loggedUserContext, setLoggedUserContext} = useContext(UserContext);		
	
	const logOut = () => {
		const usersData = JSON.parse(localStorage.getItem('userData'));
		const updatedUserData = usersData.map(user => {
			if(user.name === loggedUserContext.name){
				user.isLogined = false;
				return user;
			}
			return user;
		});
		localStorage.setItem('userData', JSON.stringify(updatedUserData));
		setLoggedUserContext(null);
	};
	
	return (
		<nav className='navigation-bar'>
			<a href='#' ><img src='/public/logo.svg' alt='логотип'/></a>			
			<div className='navigation-bar__menu'>
				<a href='#' className='navigation-bar__item'>Поиск фильмов</a>
				<a href='#' className='navigation-bar__item'>Мои фильмы<div className='favourites-count'>{loggedUserContext?.favourites ?? 0}</div></a>
					
				{loggedUserContext 
					? <a href='#' className='navigation-bar__item navigation-bar__userItem'><img src='/public/user-icon.svg' alt='Иконка пользователя' />{loggedUserContext.name}</a>
					: ''	
				}	

				{loggedUserContext 
					? <a href='#' className='navigation-bar__item navigation-bar__userItem' onClick={logOut}>Выйти</a> 
					: <a href='#' className='navigation-bar__item navigation-bar__userItem'>Войти<img src='/public/entery-icon.svg' alt='Иконка входа' /></a>	
				}				
			</div>
		</nav>
	);
}

export default NavigationBar;
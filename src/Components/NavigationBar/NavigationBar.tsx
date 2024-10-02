import { useContext } from 'react';
import './NavigationBar.css';
import { IData, UserContext } from '../../context/userData.context';
import { IUserData } from '../LoginForm/LoginFormProps';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function NavigationBar(){	

	const {loggedUserContext, setLoggedUserContext} = useContext(UserContext);		
	
	const navigate = useNavigate();
	
	const logOut = () => {

		const data = localStorage.getItem('userData');
		if(data){
			const usersData: IUserData[] = JSON.parse(data);
			const updatedUserData = usersData.map(user => {
				if(user.name === loggedUserContext.name){
					user.isLogined = false;
					return user;
				}
				return user;
			});

			localStorage.setItem('userData', JSON.stringify(updatedUserData));
			setLoggedUserContext(null as unknown as IData);
		}
		navigate('/auth');
		
	};
	
	return (
		<nav className='navigation-bar'>
			<Link to={'/'} ><img src='/public/logo.svg' alt='логотип'/></Link>			
			<div className='navigation-bar__menu'>
				<NavLink to={'/'} className={({isActive}) => {
					return isActive ? 'navigation-bar__item navigation-bar__item_active' : 'navigation-bar__item';
				}}>Поиск фильмов</NavLink>
				<NavLink to={'/favourites'} className={({isActive}) => {
					return isActive ? 'navigation-bar__item navigation-bar__item_active' : 'navigation-bar__item';
				}}>Мои фильмы<div className='favourites-count'>{loggedUserContext?.favourites ?? 0}</div></NavLink>
					
				{loggedUserContext 
					? <a href='#' className='navigation-bar__item navigation-bar__userItem'><img src='/public/user-icon.svg' alt='Иконка пользователя' />{loggedUserContext.name}</a>
					: ''	
				}	

				{loggedUserContext 
					? <a href='#' className='navigation-bar__item navigation-bar__userItem' onClick={logOut}>Выйти</a> 
					: <NavLink to={'/login'} className={({isActive}) => {
						return isActive ? 'navigation-bar__item navigation-bar__userItem navigation-bar__item_active' : 'navigation-bar__item navigation-bar__userItem';
					}}>Войти<img src='/public/entery-icon.svg' alt='Иконка входа' /></NavLink>	
				}				
			</div>
		</nav>
	);
}

export default NavigationBar;
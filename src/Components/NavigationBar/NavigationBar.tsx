import { useContext, useEffect } from 'react';
import './NavigationBar.css';
import { IUserData } from '../LoginForm/LoginFormProps';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { movieActions } from '../../store/movie.slice';
import { userActions } from '../../store/user.slice';
import { searchActions } from '../../store/search.slice';

function NavigationBar(){	
		
	const dispatch = useDispatch<AppDispatch>();
	const movieCounter = useSelector((state: RootState) => state.movie.movies.length)
	const userName = useSelector((state: RootState) => state.user.name)
	const navigate = useNavigate();
	
	useEffect(()=> {
		dispatch(userActions.load());
	},[userName])

	const logOut = () => {

		const data = localStorage.getItem('userData');
		if(data){
			const usersData: IUserData[] = JSON.parse(data);
			const updatedUserData = usersData.map(user => {
				if(user.name === userName){
					user.isLogined = false;
					return user;
				}
				return user;
			});

			localStorage.setItem('userData', JSON.stringify(updatedUserData));			
		}
		dispatch(movieActions.clear());
		dispatch(searchActions.clear());
		navigate('/auth');		
	};

	return (
		<nav className='navigation-bar'>
			<Link to={'/'} ><img src='/public/logo.svg' alt='логотип'/></Link>			
			<div className='navigation-bar__menu'>
				<NavLink to={'/'} className={({isActive}) => {
					return cn({
						'navigation-bar__item': true,
						'navigation-bar__item_active': isActive
					}); 
				}}>Поиск фильмов</NavLink>
				<NavLink to={'/favourites'} className={({isActive}) => {
					return cn({
						'navigation-bar__item': true,
						'navigation-bar__item_active': isActive
					}); 					
				}}>Мои фильмы<div className='favourites-count'>{movieCounter}</div></NavLink>
					
				{userName 
					? <a href='#' className='navigation-bar__item navigation-bar__userItem'><img src='/public/user-icon.svg' alt='Иконка пользователя' />{userName}</a>
					: ''	
				}	

				{userName 
					? <a href='#' className='navigation-bar__item navigation-bar__userItem' onClick={logOut}>Выйти</a> 
					: <NavLink to={'/login'} className={({isActive}) => {						
						return cn({
							'navigation-bar__item' : true,
							'navigation-bar__userItem' : true,
							'navigation-bar__item_active' : isActive
						});
					}}>Войти<img src='/public/entery-icon.svg' alt='Иконка входа' /></NavLink>	
				}				
			</div>
		</nav>
	);
}

export default NavigationBar;
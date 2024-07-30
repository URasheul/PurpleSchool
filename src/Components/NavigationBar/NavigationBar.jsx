import './NavigationBar.css';

function NavigationBar({favouritesCount}){	
		
	return (
		<nav className='navigation-bar'>
			<a href='#' ><img src='/public/logo.svg' alt='логотип'/></a>			
			<div className='navigation-bar__menu'>
				<a href='#' className='navigation-bar__item'>Поиск фильмов</a>
				<a href='#' className='navigation-bar__item'>Мои фильмы<div className='favourites-count'>{favouritesCount ?? 0}</div></a>
				<a href='#' className='navigation-bar__item navigation-bar__userItem'>Войти<img src='/public/entery-icon.svg' alt='Иконка входа' /></a>				
			</div>
		</nav>
	);
}

export default NavigationBar;
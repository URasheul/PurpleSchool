import './HeroHeader.css';

function HeroHeader({children, searchInput}){

	if(searchInput){
		return (
			<div className='hero-header hero-header_search'>{children}</div>
		);
	} else {
		return (
			<div className='hero-header hero-header_login'>{children}</div>
		);
	}
} 

export default HeroHeader; 
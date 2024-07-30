import './AddToFavouritesButton.css';

function AddToFavouritesButton({inFavourites}){

	if(!inFavourites){
		return (
			<div className='to-favourites-button'>
				<img src='/public/add-to-fav-icon.svg' alt='В избранное'/>
				В избранное
			</div>
		);
	} else {
		return (
			<div className='to-favourites-button added-to-fav'>
				<img src='/public/added-to-fav-icon.svg' alt='В избранном'/>
				В избранном
			</div>
		);		
	}
} 

export default AddToFavouritesButton; 
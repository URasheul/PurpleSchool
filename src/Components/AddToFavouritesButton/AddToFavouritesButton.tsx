import { EventHandler, SyntheticEvent } from 'react';
import styles from  './AddToFavouritesButton.module.css';
import { AddToFavouritesButtonProps } from './AddToFavouritesButtonProps';

function AddToFavouritesButton({inFavourites=false}: AddToFavouritesButtonProps){

	function select(e: SyntheticEvent) {
		e.stopPropagation()
	}

	if(!inFavourites){
		return (
			<div onClick={select} className={styles['to-favourites-button']}>
				<img src='/public/add-to-fav-icon.svg' alt='В избранное'/>
				В избранное
			</div>
		);
	} else {
		return (
			<div onClick={select} className={styles['to-favourites-button added-to-fav']}>
				<img src='/public/added-to-fav-icon.svg' alt='В избранном'/>
				В избранном
			</div>
		);		
	}
} 

export default AddToFavouritesButton; 
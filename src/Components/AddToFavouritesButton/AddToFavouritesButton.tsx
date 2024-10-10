import { EventHandler, SyntheticEvent } from 'react';
import styles from  './AddToFavouritesButton.module.css';
import { AddToFavouritesButtonProps } from './AddToFavouritesButtonProps';
import cn from 'classnames';

function AddToFavouritesButton({inFavourites=false}: AddToFavouritesButtonProps){
	
	
	if(!inFavourites){
		return (
			<button className={cn(styles['to-favourites-button'])}>
				<img src='/public/add-to-fav-icon.svg' alt='В избранное'/>
				В избранное
			</button>
		);
	} else {
		return (
			<button className={cn({[styles['to-favourites-button']]: true,  [styles['added-to-fav']]: true})}>
				<img src='/public/added-to-fav-icon.svg' alt='В избранном'/>
				В избранном
			</button>
		);		
	}
} 

export default AddToFavouritesButton; 
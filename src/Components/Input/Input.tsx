import Button from '../Button/Button';
import { BaseSyntheticEvent, forwardRef, SyntheticEvent, useState } from 'react';
import styles from './Input.module.css';
import { InputProps } from './InputProps';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


const Input = forwardRef<HTMLInputElement, InputProps>(function Input({isSearch, onChange, onClick}, ref){

	const userSearch = useSelector((state: RootState) => state.search.value);

	const onKeyDown = ({key}: {key:string}) => {
		if(key === 'Enter'){
			if(onClick){
				onClick();
			}					
		}	
	}

	if(isSearch === 'search'){
		return (
			<div className={styles['input-wrapper']} ref={ref}>
				<img className={styles['input-icon']} src='/public/search-icon.svg' alt='поиск'></img>
				<input type='text' name='search' className={styles['input']} placeholder='Введите название' onKeyDown={onKeyDown} onChange={onChange} defaultValue={userSearch}/>
				<Button onClick={onClick}>{'Искать'}</Button>
			</div>
		);
	}
	return (
		<>
			<input id='name' type='text' className={`${styles['input']} ${styles['input-login']}`} name='name' placeholder='Ваше имя' onChange={onChange}/>			
		</>
	);
});

export default Input;


import Button from '../Button/Button';
import { forwardRef } from 'react';
import styles from './Input.module.css';
import { InputProps } from './InputProps';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({isSearch, inputChange, clickFunc}, ref){

	if(isSearch){
		return (
			<div className={styles['input-wrapper']} ref={ref}>
				<img className={styles['input-icon']} src='/public/search-icon.svg' alt='поиск'></img>
				<input type='text' className={styles['input']} placeholder='Введите название' onChange={inputChange}/>
				<Button clickFunc={clickFunc}>{'Искать'}</Button>
			</div>
		);
	}
	return (
		<>
			<input type='text' className={`${styles['input']} ${styles['input-login']}`} name='name' placeholder='Ваше имя' onChange={inputChange}/>			
		</>
	);
});

export default Input;
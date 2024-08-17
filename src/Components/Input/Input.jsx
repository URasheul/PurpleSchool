import Button from '../Button/Button';
import { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(function Input({isSearch, inputChange, clickFunc}, ref){

	if(isSearch){
		return (
			<div className='input-wrapper' ref={ref}>
				<img className='input-icon' src='/public/search-icon.svg' alt='поиск'></img>
				<input type='text' className='input' placeholder='Введите название' onChange={inputChange}/>
				<Button buttonTitle={'Искать'} onClick={clickFunc}/>
			</div>
		);
	}
	return (
		<>
			<input type='text' className='input input-login' name='name' placeholder='Ваше имя' onChange={inputChange}/>			
		</>
	);
});

export default Input;
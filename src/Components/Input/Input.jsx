import Button from '../Button/Button';
import './Input.css';

function Input({isSearch, inputChange, clickFunc}){

	if(isSearch){
		return (
			<div className='input-wrapper'>
				<img className='input-icon' src='/public/search-icon.svg' alt='поиск'></img>
				<input type='text' className='input' placeholder='Введите название' onChange={inputChange}/>
				<Button buttonTitle={'Искать'} onClick={clickFunc}/>
			</div>
		);
	}
	return (
		<>
			<input type='text' className='input input-login' placeholder='Ваше имя' onChange={inputChange}/>
			<Button buttonTitle={'Войти в профиль'} onClick={clickFunc}/>
		</>
	);
}

export default Input;
import { FormEvent, InputHTMLAttributes, useContext } from 'react';
import Button from '../Button/Button';
import Headling from '../Headling/Headling';
import Input from '../Input/Input';
import styles from './LoginForm.module.css'; 
import { IUserData, LoginFormProps } from './LoginFormProps'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { movieActions } from '../../store/movie.slice';

type LoginForm = {
	name : {
		value: string;
	}
}

function LoginForm({title,buttonTitle,clickFunc,inputChange}: LoginFormProps){

	
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	function log(e: FormEvent<HTMLFormElement>){
		e.preventDefault();		
		const data = e.target as typeof e.target & LoginForm;		
		
		const storageData = localStorage.getItem('userData');

		if(storageData) {
			const userData: IUserData[] = JSON.parse(storageData);			
			const user = userData.find(i => i.name === data.name.value);		
		
		if(user) {
			const newUserData = userData.map(user => {
				if(user.name === data.name.value){
					user.isLogined = true;					
				}
				return user;
			});
			localStorage.setItem('userData', JSON.stringify(newUserData));			
			
		} else {
			const newUser: IUserData = {
				name : data.name.value,
				isLogined : true,
				movies : [] 
			};

			userData.push(newUser);						
			localStorage.setItem('userData', JSON.stringify(userData));			
		}		
		e.currentTarget.reset();
		dispatch(movieActions.load());
		navigate('/');				
	}

}

	return(
		<form className={styles.loginForm} onSubmit={log}>
			<Headling title={title}/>
			<Input onChange={inputChange}/>
			<Button onClick={clickFunc}>{buttonTitle}</Button>
		</form>
	);
} 

export default LoginForm; 
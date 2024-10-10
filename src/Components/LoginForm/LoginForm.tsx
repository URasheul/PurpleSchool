import { FormEvent, useContext } from 'react';
import Button from '../Button/Button';
import Headling from '../Headling/Headling';
import Input from '../Input/Input';
import styles from './LoginForm.module.css'; 
import { UserContext } from '../../context/userData.context';
import { IUserData, LoginFormProps } from './LoginFormProps'
import { useNavigate } from 'react-router-dom';



function LoginForm({title,buttonTitle,clickFunc,inputChange}: LoginFormProps){

	const {setLoggedUserContext} = useContext(UserContext);	
	const navigate = useNavigate();

	function log(e: FormEvent<HTMLFormElement>){
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const formValue = Object.fromEntries(formData.entries());	

		const storageData = localStorage.getItem('userData');

		if(storageData) {
			const userData: IUserData[] = JSON.parse(storageData);
			const user = userData.find(i => i.name === formValue.name);		
		
		
		if(user) {
			const newUserData = userData.map(user => {
				if(user.name === formValue.name){
					user.isLogined = true;
					setLoggedUserContext(user);
				}
				return user;
			});
			localStorage.setItem('userData', JSON.stringify(newUserData));			
			
		} else {
			const newUser: IUserData = {
				name : formValue.name as string,
				isLogined : true 
			};

			userData.push(newUser);	
			setLoggedUserContext(newUser);			
			localStorage.setItem('userData', JSON.stringify(userData));			
		}
		
		e.currentTarget.reset();
		navigate('/');		
		
	}
}

	return(
		<form className={styles.loginForm} onSubmit={log}>
			<Headling title={title}/>
			<Input inputChange={inputChange}/>
			<Button clickFunc={clickFunc}>{buttonTitle}</Button>
		</form>
	);
} 

export default LoginForm; 
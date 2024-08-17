import { useContext } from 'react';
import Button from '../Button/Button';
import Headling from '../Headling/Headling';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';
import { UserContext } from '../../context/userData.context';

function LoginForm({title,buttonTitle,clickFunc,inputChange}){

	const {setLoggedUserContext} = useContext(UserContext);
	

	function log(e){
		e.preventDefault();
		const formData = new FormData(e.target);
		const formValue = Object.fromEntries(formData.entries());	
		const userData = JSON.parse(localStorage.getItem('userData'));
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
			const newUser = {
				name : formValue.name,
				isLogined : true 
			};
			userData.push(newUser);	
			setLoggedUserContext(newUser);			
			localStorage.setItem('userData', JSON.stringify(userData));			
		}
		
		e.target.reset();
	}

	return(
		<form className={styles.loginForm} onSubmit={log}>
			<Headling title={title}/>
			<Input inputChange={inputChange}/>
			<Button buttonTitle={buttonTitle} clickFunc={clickFunc}></Button>
		</form>
	);
} 

export default LoginForm; 
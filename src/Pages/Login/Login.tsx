import { useCallback } from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";

function Login() {

	const isClickFunc = useCallback(function() {				
		// setIsClicked(true);
	}, []);	
	
	const inputChange = () => {
		// setInputData(e.target.value); 
	};

	return (
		<LoginForm title={'Вход'} inputChange={inputChange} clickFunc={isClickFunc} buttonTitle="Войти в профиль"/>
	)
};

export default Login;
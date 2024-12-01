import { Outlet } from "react-router-dom";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import { useState, useEffect } from "react";
import Login from "../../Pages/Login/Login";
import { IUserData } from "../../Components/LoginForm/LoginFormProps";


function AuthMenu() {	

	const [loginedUser, setLoginedUser] = useState<IUserData>(null as unknown as IUserData);	
		
	useEffect(() => {
		const storage = localStorage.getItem('userData');
		if(storage){
			const usersData: IUserData[]  = JSON.parse(storage);
			const user = usersData.find(i => i.isLogined === true);
			if(user){
				setLoginedUser(user);
			}	
		} else {
			localStorage.setItem('userData', JSON.stringify([]));
		}			
	}, []);	

	return (
		<>
			<NavigationBar/>
			<Login/>					
		</>		
	)
};

export default AuthMenu;
import { Outlet } from "react-router-dom";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import { IData, UserDataContext } from "../../context/userData.context";
import { useState, useEffect } from "react";
import Login from "../../Pages/Login/Login";


function AuthMenu() {	

	const [loginedUser, setLoginedUser] = useState<IData>(null as unknown as IData);	
	console.log('here');
	
	useEffect(() => {
		const storage = localStorage.getItem('userData');
		if(storage){
			const usersData: IData[]  = JSON.parse(storage);
			const user = usersData.find(i => i.isLogined === true);
			if(user){
				setLoginedUser(user);
			}	
		} else {
			localStorage.setItem('userData', JSON.stringify([]));
		}			
	}, []);	

	return (
		<UserDataContext loginedUser={loginedUser}>
			<NavigationBar/>
			<Login/>					
		</UserDataContext>		
	)
};

export default AuthMenu;
import { Outlet } from "react-router-dom";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import { useState, useEffect } from "react";
import { IUserData } from "../../Components/LoginForm/LoginFormProps";


function Menu() {

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
			<Outlet/>			
		</>		
	)
};

export default Menu;
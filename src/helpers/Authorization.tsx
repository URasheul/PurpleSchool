import { Navigate } from "react-router-dom";
import { useUserData } from "../context/userData.context";
import { ReactNode } from "react";
import AuthMenu from "../Layout/AuthMenu/AuthMenu";
import { IUserData } from "../Components/LoginForm/LoginFormProps";

function Authorization({children}: {children:ReactNode}) {
	
	
	const data = localStorage.getItem('userData');

		if(!data){
			return <Navigate to='/auth' replace/>;
		} else {
			const usersData: IUserData[] = JSON.parse(data);
			const loggedUser = usersData.find(user => {
				return user.isLogined
			})

			if(!loggedUser){
				return <Navigate to='/auth' replace/>	
			} else {											
				return children;
			}
		}	
}

export default Authorization;


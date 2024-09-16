import { Context, createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';


export interface IData {
	name: string;
	isLogined: boolean;
	favourites?: number;
}

interface IContext {
	loggedUserContext: IData;
	setLoggedUserContext: Dispatch<SetStateAction<IData>>
}


interface UserDataContextProps {
	children: ReactNode;
	loginedUser: IData;
}

export const UserContext = createContext<IContext>(null as unknown as IContext);

export function useUserData() {
	const data = useContext(UserContext);
	return data;
}

export function UserDataContext({children, loginedUser}: UserDataContextProps) {
	
	const [loggedUserContext, setLoggedUserContext] = useState(loginedUser);
		
	useEffect(() => {
		setLoggedUserContext(loginedUser);
	}, [loginedUser]);

	return (
		<UserContext.Provider value={{loggedUserContext, setLoggedUserContext}}>
			{children}
		</UserContext.Provider>
	);
}
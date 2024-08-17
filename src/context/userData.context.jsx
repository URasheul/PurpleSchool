import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();


export function UserDataContext({children, loginedUser}) {
	
	const [loggedUserContext, setLoggedUserContext] = useState(null);
		
	useEffect(() => {
		setLoggedUserContext(loginedUser);
	}, [loginedUser]);

	return (
		<UserContext.Provider value={{loggedUserContext, setLoggedUserContext}}>
			{children}
		</UserContext.Provider>
	);
}
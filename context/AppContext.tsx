'use client'

import { createContext, PropsWithChildren } from "react";


interface IContext {
	href?: string;
}

export const Context = createContext<IContext>({});


export default function AppContext({children} : PropsWithChildren) {
	return (
		<Context.Provider value={{href : process.env.NEXT_PUBLIC_HEADER_URL}}>
			{children}
		</Context.Provider>		
	)
}




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './Layout/Menu/Menu';
import Login from './Pages/Login/Login';
import Favourites from './Pages/Favourites/Favourites';
import Movie from './Pages/Movie/Movie';
import Hero from './Pages/Hero/Hero';
import Error from './Pages/Error/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Menu/>,
		children: [
			{
				path: '/',
				element: <Hero/>
			},
			{
				path: '/login',
				element: <Login/>
			},
			{
				path: '/favourites',
				element: <Favourites/>
			},
			{
				path: '/movie/:id',
				element: <Movie/>
			},
			{
				path: '*',
				element: <Error/>
			}

		]
	}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
			<RouterProvider router={router}/>				
	</React.StrictMode>
);

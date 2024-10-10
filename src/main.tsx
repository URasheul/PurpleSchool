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
import axios from 'axios';
import Authorization from './helpers/Authorization';
import AuthMenu from './Layout/AuthMenu/AuthMenu';




const router = createBrowserRouter([
	{
		path: '/auth',
		element: <AuthMenu/>
	},
	{
		path: '/',
		element: <Authorization><Menu/></Authorization>,
		children: [
			{
				path: '/',
				element:<Hero/>
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
				element: <Movie/>,
				loader: async ({params}) => {					
						const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.id}`, {
							headers: {
								'X-API-KEY': '3274ae02-c434-4ed6-946f-eed78ba9cf56',
								'Content-Type': 'application/json',
							}
						});										
						return  response.data
				}				
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

import axios, { AxiosError } from "axios";

export const AddLike = async (id: number, isLiked: boolean) => {

	try {
	const {data} = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
	{
		isLiked: !isLiked
	},
	{
		headers: {
	'Content-type': 'application/json; charset=UTF-8',
		}
	}
	);        

	console.log(data);   

	} catch (error) {
	if(error instanceof AxiosError){
		console.error(error.message);    
	}
	}		
	};
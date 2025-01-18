import { IPost } from "@/interfaces/Post.interface";
import axios, { AxiosError, isAxiosError } from "axios";

export const AddLike = async (id: string, isLiked: boolean) => {

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


export const getPosts = async () => {
	const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
	return response.data;
}

export const getPostById = async (id: number) => {

	console.log("Getting POST by ID");
	
	try {		
		const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);		
		return data;
	} catch(error) {		
		if(isAxiosError(error)) {
			console.error(error.message)
		}
	}
}
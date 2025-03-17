import axios, { isAxiosError } from "axios";
import { IComment, IPost } from "@/interfaces/Post.interface";



class JsonPlaceholderClient {

	async getPosts() {
		try {
			const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
			return response.data;
		} catch(error) {
			if(isAxiosError(error)) {
				console.error(error.message)
			}
			return [];
		}
	}
	
	async getPostById (id: number){
		try {		
			const {data} = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);		
			return data;
		} catch(error) {		
			if(isAxiosError(error)) {
				console.error(error.message)
			}			
		}
	}

	async getComments(id: number) {
		try {		
			const {data} = await axios.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
			return data;
		} catch(error) {		
			if(isAxiosError(error)) {
				console.error(error.message)
			}			
		}
	}

	async postComment(id: number, name:string, comment: string) {
		try {		
			const {data} = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
			{
				name,
				comment												
			}
			);	
			return data;

		} catch(error) {		
			if(isAxiosError(error)) {		
				console.error(error.message)				
			}					
		}
	}

	async LikeHandler (id: number, isLiked: boolean) {

		try {
		const { data } = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
		{
			isLiked: !isLiked
		},
		{
			headers: {
		'Content-type': 'application/json; charset=UTF-8',
			}
		});        
		console.log(data);		
		} catch (error) {
		if(isAxiosError(error)){
			console.error(error.message);    
		}
		}		
	}
}

export const apiHandler = new JsonPlaceholderClient();



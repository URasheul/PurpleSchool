import { Metadata } from "next";

import { apiHandler } from "@/api/ApiClient";
import { LikeButton } from "@/components";





export async function generateStaticParams() {
	const posts = await apiHandler.getPosts();
	if(posts) {
		return posts.filter(post => post.id < 10).map((post) => {		
				return { id : post.id.toString()}				
		});
	}
}


export const metadata: Metadata = {
	title: 'Post'
}


export default async function Post({params} : {params : Promise<{ id : string}>}) {
	const { id } = await params
	const post = await apiHandler.getPostById(+id);
	
	if(post) {
		return (
			<>
			<div>POST TITLE: {post.title}</div>			
			<LikeButton postId={+id}/>			
			</>
		)
	}		
}

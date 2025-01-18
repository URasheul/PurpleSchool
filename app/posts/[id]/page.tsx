import { getPostById, getPosts } from "@/api/AddLikeFunction"
import { IPost } from "@/interfaces/Post.interface";
import { Metadata } from "next";


export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.filter(post => post.id < 10).map((post) => {		
			return { id : post.id.toString()}				
	});
}


export const metadata: Metadata = {
	title: 'Post'
}


export default async function Posts({params} : {params : Promise<{ id : string}>}) {
	const { id } = await params
	const post : IPost = await getPostById(+id);

	return (
		<div>POST TITLE: {post.title}</div>
	)
}
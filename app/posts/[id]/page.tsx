import { Metadata } from "next";

import { apiHandler } from "@/api/ApiClient";

import { Comment, CommentForm, Headling, Post } from "@/components";
import styles from "./page.module.css";



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


export default async function PostPage({params} : {params : Promise<{ id : string}>}) {
	
	const { id } = await params;
	const post = await apiHandler.getPostById(+id);
	const comments = await apiHandler.getComments(+id);

	if(!post) {
		return;
	}

	return (
		<div className={styles.main}>
			<Post title={post.title} description={post.body} id={+id}/>
			{comments &&
				<div className={styles.comments}>
					<Headling size="m">Комментарии</Headling>
					{
						comments.map(item =>(
							<Comment 
							key={item.id}
							name={item.name} 
							email={item.email}
							body={item.body}
							/>
							)
						)
					}
				</div>			
			}
			<CommentForm id={+id}/>
		</div>
	)
	
}

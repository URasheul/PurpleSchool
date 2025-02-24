
import Image from "next/image";

import { Headling, LikeButton, LikeTag, Paragraph, Tag } from "@/components";

import { getReadingTime } from "@/helpers/helpers";
import styles from "./Post.module.css";

import { PostProps } from "./Post.props";



	

export function Post({title, description, id}: PostProps) {

	return (
			<div className={styles.post}>
				<div className={styles.postHeader}>
					<Headling>{title}</Headling>
					<div className={styles.headerTags}>
						<Tag>Front-end</Tag>
						<span>&#183;</span>
						<Tag appearance="light">1 месяц назад</Tag>			
						<span>&#183;</span>
						<Tag appearance="light">{getReadingTime(description)}</Tag>			
						<LikeTag likeCount={5}/>
					</div>
				</div>
				<Image
					alt="обложка поста"
					src={'/post-large-cover.jpg'}	
					width={650}
					height={435}
					className={styles.image}
				/>
				<Paragraph size="l">{description}</Paragraph>
				<div className={styles.addLike}>
					<span className={styles.text}>Понравилось? Жми</span>
					<LikeButton postId={id}/>
				</div>
			</div>
	)
}			
			
			
			
import Image from "next/image";
import { CardButton } from "../CardButton/CardButton";
import { Headling } from "../Headling/Headling";
import { LikeTag } from "../LikeTag/LikeTag";
import { Paragraph } from "../Paragraph/Paragraph";
import { Tag } from "../Tag/Tag";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";


export function Card({image, title, likesCount, themeTag, text, publicationTime, duration} : CardProps): JSX.Element {
	return (
		<div className={styles.card}>
			<div className={styles.cover}>	
					<Image 
					className={styles.image}
					src={image}
					width={330}
					height={200}
					alt="Обложка карточки"
					/>
			</div>
			<div className={styles.header}>
				<div className={styles.header_left}>
					<Tag>{themeTag}</Tag>
					<span>&#183;</span>
					<Tag appearance="light">{publicationTime}</Tag>			
				</div>
				<LikeTag likeCount={likesCount}/>
			</div>
			<Headling size="s">{title}</Headling>
			<Paragraph size="s" className={styles.paragraph}>
				{text}
			</Paragraph>			
			<div className={styles.footer}>
				<Tag appearance="light">{duration}</Tag>
				<CardButton href=""/>
			</div>
		</div>
	)
}
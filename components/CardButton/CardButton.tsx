import styles from "./CardButton.module.css"
import Link from "next/link";
import ArrowIcon from "@/public/arrow-icon.svg";
import { CardButtonProps } from "./CardButton.props";




export function CardButton({postId}:CardButtonProps): JSX.Element {

	return (
		
		<Link href={`/posts/${postId}`} className={styles.link}>
			<span>Читать</span>
			<ArrowIcon/>			
		</Link>
		
	);
}
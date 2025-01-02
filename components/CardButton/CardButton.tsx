import styles from "./CardButton.module.css"
import Link from "next/link";
import ArrowIcon from "@/public/arrow-icon.svg";
import { CardButtonProps } from "./CardButton.props";




export function CardButton({href=""}:CardButtonProps): JSX.Element {

	return (
		
		<Link href={href} className={styles.link}>
			<span>Читать</span>
			<ArrowIcon/>			
		</Link>
		
	);
}
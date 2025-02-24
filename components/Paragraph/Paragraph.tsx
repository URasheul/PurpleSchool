import cn from "classnames";
import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";

export function Paragraph({children, size, className}: ParagraphProps): JSX.Element {

	return (
		<p className={cn(styles.paragraph, {
			[styles.small] : size === "s",
			[styles.medium] : size === "m",
			[styles.large] : size === "l",
			[`${className}`] : className
		})}>
			{children}
		</p>
	)
}

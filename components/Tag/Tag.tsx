import cn from 'classnames';
import styles from "./Tag.module.css";
import { TagProps } from './Tag.props';

export function Tag({children, appearance} : TagProps): JSX.Element {
 
	return (
		<span className={cn(styles.tag, {
			[styles.light]: appearance === "light",
			[styles.bold]: appearance === "bold"
		})}>{children}</span>
	)
}


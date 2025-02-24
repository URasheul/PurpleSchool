import cn from "classnames";

import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";



export function Button({children, className} : ButtonProps) {

	return (
		<button className={cn(styles.button, className)}>{children}</button>
	)
}
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

export function Input({ placeholder, className, ...props} : InputProps) {

	return (
		<input {...props} placeholder={placeholder} className={cn(styles.input, className)}/>
	)
}
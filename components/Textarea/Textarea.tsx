
import styles from "./Textarea.module.css";
import { TextareaProps } from "./Textarea.props";
import cn from "classnames";

export function Textarea({ placeholder, className, rows=3, ...props} : TextareaProps) {

	return (
		<textarea {...props} placeholder={placeholder} rows={rows} className={cn(styles.textarea, className)}></textarea>
	)
}
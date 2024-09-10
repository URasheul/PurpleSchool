import styles from './Headling.module.css';
import { HeadlingProps } from './HeadlingProps';

function Headling({title, className}: HeadlingProps){
	const cn = className ? `${className} + ${styles["main-title"]}` : styles["main-title"];
	return (
		<h1 className={cn}>{title}</h1>
	);
} 

export default Headling; 
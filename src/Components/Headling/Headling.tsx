import styles from './Headling.module.css';
import { HeadlingProps } from './HeadlingProps';
import cn from 'classnames';

function Headling({title, className}: HeadlingProps){	

	
	return (
		<h1 className={cn(className, {[styles['main-title']]: true})}>
			{title}
		</h1>
	);
} 

export default Headling; 
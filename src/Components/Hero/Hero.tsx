import styles from './Hero.module.css';
import { HeroProps } from './HeroProps';

function Hero({children, className}: HeroProps){
	let cn = className ? styles['hero'] + className  : styles['hero'];
	return (
		<div className={cn}>{children}</div>
	);
} 

export default Hero; 
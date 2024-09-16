import styles from './Hero.module.css';
import { HeroProps } from './HeroProps';

function Hero({children}: HeroProps){

	return (
		<div className={styles['hero']}>{children}</div>
	);
} 

export default Hero; 
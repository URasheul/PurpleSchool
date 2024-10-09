import styles from './Hero.module.css';
import { HeroProps } from './HeroProps';
import cn from 'classnames';

function Hero({children, className}: HeroProps){	
	return (
		<div className={cn({className, [styles.hero]: true})}>
			{children}
		</div>
	);
} 

export default Hero; 
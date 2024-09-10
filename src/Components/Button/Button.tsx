import { Children, forwardRef } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({children,clickFunc}, ref){
	
	return (
		<button className={styles['button']} ref={ref} onClick={clickFunc}>{children}</button>
	);
});

export default Button;
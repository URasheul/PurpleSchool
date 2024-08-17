import { forwardRef } from 'react';
import './Button.css';

const Button = forwardRef(function Button({buttonTitle,clickFunc}, ref){
	
	return (
		<button className="button" ref={ref} onClick={clickFunc}>{buttonTitle}</button>
	);
});

export default Button;
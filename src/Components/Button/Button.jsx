
import './Button.css';

function Button({buttonTitle,clickFunc}){
	
	return (
		<button className="button" onClick={clickFunc}>{buttonTitle}</button>
	);
}

export default Button;
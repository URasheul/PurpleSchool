import './Paragraph.css';

function Paragraph({text, className}){
	let cl = 'paragraph' + (className ? ' ' + className : '');
	return (
		<p className={cl}>{text}</p>
	);
}

export default Paragraph;
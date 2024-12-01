import './Paragraph.css';
import { ParagraphProps } from './ParagraphProps';

function Paragraph({text, className}: ParagraphProps){
	let cl = 'paragraph' + (className ? ' ' + className : '');
	return (
		<p className={cl}>{text}</p>
	);
}

export default Paragraph;
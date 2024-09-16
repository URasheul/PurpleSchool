import { useCallback } from 'react';
import Headling from '../Headling/Headling';
import Input from '../Input/Input';
import Paragraph from '../Paragraph/Paragraph';
import styles from './HeroHeader.module.css';
import { HeroHeaderProps } from './HeroHeaderProps';

function HeroHeader({title, text}: HeroHeaderProps){
	
	const isClickFunc = useCallback(() => {
		
	}, []);
	
	const inputChange = () => {
		// setInputData(e.target.value); 
	};
		
		return (			
			<div className={`${styles['hero-header']} ${styles['hero-header_search']}`}>				
				<Headling title={title}/>
				<Paragraph 
					text={text}
					className='paragraph_16'/>
				<Input isSearch={true} inputChange={inputChange} clickFunc={isClickFunc}/>
			</div>			
		);


	
} 

export default HeroHeader; 


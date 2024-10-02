import { RefObject, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import Headling from '../Headling/Headling';
import Input from '../Input/Input';
import Paragraph from '../Paragraph/Paragraph';
import styles from './HeroHeader.module.css';
import { HeroHeaderProps } from './HeroHeaderProps';
import { useUserData } from '../../context/userData.context';


function HeroHeader({title, text, searchFunc}: HeroHeaderProps){

		
	const [inputValue, setInputvalue] = useState<string | undefined>();	

	
	
	const context = useUserData();
	
	useEffect(()=> {
		if(context.searchQuery){
			setInputvalue(context.searchQuery)
		}
	}, [])

	function isClickFunc(){											
		searchFunc(inputValue);
	};


	function changeInputValue(e: SyntheticEvent) {
		const element = e.target as HTMLInputElement;		
		context.setSearchQuery(element.value);
		setInputvalue(element.value);		
	}	

		
		return (			
			<div className={`${styles['hero-header']} ${styles['hero-header_search']}`}>				
				<Headling title={title}/>
				<Paragraph 
					text={text}
					className='paragraph_16'/>
				<Input isSearch={true} inputChange={changeInputValue} clickFunc={isClickFunc}/>
			</div>			
		);


	
} 

export default HeroHeader; 


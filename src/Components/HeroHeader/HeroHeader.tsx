import { RefObject, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import Headling from '../Headling/Headling';
import Input from '../Input/Input';
import Paragraph from '../Paragraph/Paragraph';
import styles from './HeroHeader.module.css';
import { HeroHeaderProps } from './HeroHeaderProps';
import { useUserData } from '../../context/userData.context';
import cn from 'classnames';


function HeroHeader({title, text, onSearch}: HeroHeaderProps){

		
	const [inputValue, setInputvalue] = useState<string | undefined>();	

	
	
	const userDataContext = useUserData();
	
	useEffect(()=> {
		if(userDataContext.searchQuery){
			setInputvalue(userDataContext.searchQuery)
		}
	}, [])

	function isClickFunc(){											
		onSearch(inputValue);
	};


	function changeInputValue(e: SyntheticEvent) {
		const element = e.target as HTMLInputElement;		
		userDataContext.setSearchQuery(element.value);
		setInputvalue(element.value);		
	}	

		
		return (			
			<div className={cn({[styles['hero-header']]:true, [styles['hero-header_search']]: true})}>				
				<Headling title={title}/>
				<Paragraph 
					text={text}
					className='paragraph_16'/>
				<Input isSearch={'search'} onChange={changeInputValue} onClick={isClickFunc}/>
			</div>			
		);


	
} 

export default HeroHeader; 

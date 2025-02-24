

export const getReadingTime = (text: string): string => {

	const result = Math.round(text.split(' ').join('').length / 1500);	
	
	if(result % 10 <= 1) {
		return '1 минута';
	}	
	
	if(result % 10 < 5) {
		
		return `${result} минуты`;
	}	
	
	return `${result} минуты`;

}
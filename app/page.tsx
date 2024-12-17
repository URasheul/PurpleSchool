
import { Card } from "@/components";


export default function Home() {

  return (     
      <Card 
      image={'/cover.png'} 
      title={"Как работать с CSS Grid"}
      likesCount={6}
      themeTag={"Front-end"}
      text={"Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."}
      publicationTime={"1 месяц назад"}
      duration={"3 минуты"}      
      />      
  );
}

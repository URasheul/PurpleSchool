"use client"

import { Card, LikeButton } from "@/components";
import axios, { AxiosError } from "axios";
import styles from "./page.module.css";


export default function Home() {

  const onClickLikeButton = async (id: number, isLiked: boolean) => {

try {
  const {data} = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
  {
    isLiked: !isLiked
  },
  {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
  );        
  console.log(data);   
} catch (error) {
  if(error instanceof AxiosError){
    console.error(error.message);    
  }
}
     

  }

  return (   
    <>
    <div className={styles.main}>
      <Card 
      image={'/cover.png'} 
      title={"Как работать с CSS Grid"}
      likesCount={6}
      themeTag={"Front-end"}
      text={"Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."}
      publicationTime={"1 месяц назад"}
      duration={"3 минуты"}      
      />   
      <Card 
      image={'/cover.png'} 
      title={"Как работать с CSS Grid"}
      likesCount={6}
      themeTag={"Front-end"}
      text={"Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."}
      publicationTime={"1 месяц назад"}
      duration={"3 минуты"}      
      />   
      <Card 
      image={'/cover.png'} 
      title={"Как работать с CSS Grid"}
      likesCount={6}
      themeTag={"Front-end"}
      text={"Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."}
      publicationTime={"1 месяц назад"}
      duration={"3 минуты"}      
      />   
    </div> 
        <LikeButton isClicked={false} onLikeClick={onClickLikeButton}/>
       </>
  );
}

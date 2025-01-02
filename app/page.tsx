"use client"

import { Card, LikeButton } from "@/components";
import styles from "./page.module.css";
import { AddLike } from "@/api/AddLikeFunction";


export default function Home() {

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
        <LikeButton isClicked={false} onLikeClick={AddLike}/>
       </>
  );
}

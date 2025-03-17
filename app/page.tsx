'use client'

import { Card } from "@/components";
import styles from "./page.module.css";

import {apiHandler} from "../api/ApiClient";
import { useEffect, useState } from "react";
import { IPost } from "@/interfaces/Post.interface";
import { motion } from "framer-motion";


export default function Home() {

  const [data, setData] = useState<IPost[]>([]);

  
  const getData = async () => {
    const data = await apiHandler.getPosts();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [])

  const variants = {
    hidden: {     
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2        
      }
    }
  }

  const childrenVariants = {
		hidden: {
		  x: -400,
		  opacity: 0
		},
		visible: {
		  x: 0,
		  opacity: 1,
      transition: {
        duration: 0.2
      }		  
		}
	  }

  return (   
    data.length 
    ?   
    <motion.div
    variants={variants}   
    initial={'hidden'}
		animate={'visible'}
    className={styles.main}>
    {data.map(post => {
      if(post.id < 13) {
            return (
              <motion.div              
              variants={childrenVariants}
              key={post.id}
              >                
                <Card
                postId={post.id}
                image={'/cover.png'} 
                title={post.title}
                likesCount={6}
                themeTag={"Front-end"}
                text={post.body}
                publicationTime={"1 месяц назад"}
                duration={"3 минуты"}   
                />
              </motion.div>
            )
          }
        })}      
    </motion.div> 
    : 
    <div>Loading...</div>
    
  );
}

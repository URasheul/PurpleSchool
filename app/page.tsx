
import { Card } from "@/components";
import styles from "./page.module.css";
import { getPosts } from "@/api/AddLikeFunction";


export default async function Home() {

  const data = await getPosts();

  return (      
    <div className={styles.main}>
    {data.map(post => {
      if(post.id < 10) {
            return (
              <Card
              key={post.id}
              postId={post.id}
              image={'/cover.png'} 
              title={post.title}
              likesCount={6}
              themeTag={"Front-end"}
              text={post.body}
              publicationTime={"1 месяц назад"}
              duration={"3 минуты"}   
              />
            )
          }
        })}      
    </div>      
  );
}

import {useEffect, useState} from "react";
import {getPosts} from "../../servis/users.posts.comments servis";
import Post from "../post/Post";

export default function Posts() {
  let [posts,setPosts] =useState([])

  useEffect(()=>{
  getPosts().then(value => setPosts([...value]))
  })
  return (
    <div className={'posts'}>

      {

        posts.map(value => <Post key={value.id} item={value}/>)

      }

    </div>
  );
}
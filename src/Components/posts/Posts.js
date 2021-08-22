import {useEffect, useState} from "react";
import {getPosts} from "../../servises/users.servis";
import Post from "./Post";
import {Route} from "react-router-dom";
import PostDetails from "./PostDetails";

export default function Posts(props) {
    let {match:{url}}=props
    let [posts,setPosts] = useState([])
    useEffect(()=>{
        getPosts().then(value => setPosts([...value]))
    },[])
  return (
    <div>
        {
            posts.map(value => <Post key={value.key} item={value} />)
        }
        <Route path={`${url}/:id`} render={(props) => {
            return <PostDetails {...props}/>
        }}/>

    </div>
  );
}
import {useEffect, useState} from "react";
import {getPost} from "../../servises/users.servis";

export default function PostDetails(props) {

  let {location: {state}} = props
  // let [post,setposts]=useState([])
  // useEffect(()=>{
  //   getPost(id).then(value => setposts([...value]))
  // })


  return (
      <div>
        {
          JSON.stringify(state)
        }
      </div>
  )





  //
  //   let {match:{params:{id}}}= props
  // console.log(id)
  // let[post,setPost]=useState({})
  // useEffect(()=>{
  //   getPost(id).then(value => setPost({...value}))
  // },[id])
  // return (
  //   <div>
  //     {
  //       JSON.stringify(post)
  //     }
  //
  //
  //   </div>
  // );
}
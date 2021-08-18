import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../servis/users.posts.comments servis";

export default function Users() {
  let [users,setUsers] = useState([])

  useEffect(()=>{
   getUsers().then(value => setUsers([...value]))
  },[])
  return (
    <div className={'users'}>
      {
        users.map(value => <User key={value.id} item={value}/>)
      }

    </div>
  );
}
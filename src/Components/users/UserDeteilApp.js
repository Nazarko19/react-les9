import {useEffect, useState} from "react";
import {getUser} from "../../servises/users.servis";



export default function UserDeteilApp(props) {
  console.log(props);
  let {match:{params:{id}}} = props
  let [user,setUser] = useState({})
  useEffect(()=>{
    getUser(id).then(value => setUser({...value}))
  },[id])
  return (
    <div>

        {user.name}


    </div>
  );
}
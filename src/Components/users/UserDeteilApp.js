import {useEffect, useState} from "react";
import {getUser} from "../../servises/users.servis";
import Userdeailcomp from "./Userdeailcomp";


export default function UserDeteilApp(props) {
  console.log(props);
  let {match:{params:{id}}} = props
  let [user,setUser] = useState([])
  useEffect(()=>{
    getUser(id).then(value => setUser([...value]))
  },[id])
  return (
    <div>
      {

      user.map(value=> <Userdeailcomp item={value}/>);
      }

    </div>
  );
}
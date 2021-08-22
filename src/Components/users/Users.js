
import {useEffect, useState} from "react";
import {getUsers} from "../../servises/users.servis";
import User from "./User";
import {Route} from "react-router-dom";
import UserDeteilApp from "./UserDeteilApp";




export default function Users(props) {
  let {match:{url},history}=props
  console.log(url)
  let [users,setUsers] = useState([])

  useEffect(()=>{
    getUsers().then(value => setUsers([...value]))
  },[])
  return (
    <div>
      {
        users.map(value => <User history={history} key={value.id} item={value}/>)

      }
      <Route path={`${url}/:id`} render={(props)=>{
        return <UserDeteilApp {...props}/>
      }}/>
    </div>
  );
}
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "./servis/users.service";


export default function App() {
    let state = useSelector(state => state)
    let {users}= state
    let dispatch = useDispatch()
     useEffect(()=>{
         fetchUsers().then(value =>{
             dispatch({type:'Fetch_Users',payload:value})
         })
     },[])
    return (

       <div>
           {
               users.map(value =><div>{value.name}</div>)
           }
       </div>
  );
}



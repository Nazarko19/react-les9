import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addUser, fetchUsers} from "./servis/users.service";


export default function App() {
    let state = useSelector(state => state);
    let {users}= state
    let dispatch = useDispatch()
     useEffect(()=>{
         fetchUsers().then(value =>{
             dispatch({type:'Fetch_Users',payload:value})
         })
     },[])






    let [form,setForm] = useState({name: 'name'})


    let onSubmitForm = (e) => {
     e.preventDefault()
    addUser(form).then(value => {
        dispatch({type: 'Push_User',payload:value})
    })
    }




    const onChange = (e) => {
      setForm({...form,[e.target.name]:e.target.value})
    }

    return (


       <div>

           <form onSubmit={onSubmitForm}>
               <input type="text" name={'name'} value={form.name} onChange={onChange} />
               <button>addUser</button>
           </form>

           {
               users.map(value =><div>{value.name}</div>)
           }
       </div>
  );
}



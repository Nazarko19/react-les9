import {useReducer} from "react";


const reducer = (state,action) => {
    if (action.obj === '1' && action.diya === '+'){
     return {...state, a:state.a+10}
    } else if (action.obj === '1' && action.diya === '-'){
        return {...state, a:state.a-2}
    }
  return {...state}
}

export default function App() {
    let [{a},dispatch] = useReducer(reducer, {a: 0})
    console.log(a);

  return (

       <div>
           <h1>state-1 - {a}</h1>
           <button onClick={()=>dispatch({obj:'1',diya:'+'})}>збільшити на 10</button>
           <button onClick={()=>dispatch({obj:'1',diya:'-'})}>зменшити на 2</button>
       </div>
  );
}



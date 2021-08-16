import {useState} from "react";

export default function Form() {
    let [id,setId] = useState('id')
    let [model,setModel]=useState('model')
    let [price,setPrice] = useState('price')
    let [year,setYear] = useState('year')



    const onSubmitform = (e) =>{
        e.preventDefault()
        console.log(e.target.id.value)
        console.log(e.target.model.value)
    }


    let oninputid =(e) =>{
      setId(e.target.value)
    }
    let oninputmodel =(e) =>{
        setModel(e.target.value)
    }
    let oninputprice =(e) =>{
        setPrice(e.target.value)
    }
    let oninputyear =(e) =>{
        setYear(e.target.value)
    }


    return (
    <div>
      <form onSubmit={onSubmitform}>
        <input type="id" name={'id'} value={id} onInput={oninputid}/>
        <input type="model" name={'model'} value={model} onInput={oninputmodel}/>
        <input type="price" name={'price'} value={price} onInput={oninputprice}/>
        <input type="year" name={'year'} value={year} onInput={oninputyear}/>
        <input type="submit"/>
      </form>

    </div>
  );
}
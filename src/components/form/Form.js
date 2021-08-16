import {useState} from "react";
import {savecar} from "../../servis/save.car.servis";


export default function Form() {
    let [id,setId] = useState('id')
    let [model,setModel]=useState('model')
    let [price,setPrice] = useState('price')
    let [year,setYear] = useState('year')
    let [formState,setformState] = useState({id:'',model:'',price:'',year:''})



    const onSubmitform = (e) =>{
        e.preventDefault()
        let car = {id,model,price,year}
        setformState({...car})
        console.log(car)
        savecar(car)

    }


    let oninputid =(e) =>{
      let Id=(e.target.value)
        setId(Id)
    }
    let oninputmodel =(e) =>{
       let Model=(e.target.value)
        setModel(Model)
    }
    let oninputprice =(e) =>{
        let Price=(e.target.value)
        setPrice(Price)
    }
    let oninputyear =(e) =>{
        let Year=(e.target.value)
        setYear(Year)
    }


    return (
    <div>
      <form className={'form'} onSubmit={onSubmitform}>
        <input type="id" name={'id'} value={id} onInput={oninputid}/>
        <input type="model" name={'model'} value={model} onInput={oninputmodel}/>
        <input type="price" name={'price'} value={price} onInput={oninputprice}/>
        <input type="year" name={'year'} value={year} onInput={oninputyear}/>
        <input type="submit"/>
      </form>
        <div className={'car'}>{JSON.stringify(formState)}</div>
    </div>
  );
}
import {useEffect, useState} from "react";
import {getcars} from "../../servis/cars.fetch.servis";
import Car from "../car/Car";

export default function Cars() {
    let [cars,setCars] = useState([])

    useEffect(()=>{
        getcars().then(value => setCars([...value]))
    });

  return (
    <div>
        {
            cars.map(value => <Car key={value.id} item={value}/>)
        }
    </div>
  );
}







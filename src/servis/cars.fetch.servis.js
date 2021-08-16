
const getcars = () => {
  return fetch('http://<IP>/api/v1/cars')
      .then(value => value.json())

}

export {getcars}





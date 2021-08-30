let url = 'https://jsonplaceholder.typicode.com/users'
const fetchUsers = () => {
    return fetch(url)
        .then(value => value.json())

}

const addUser = ({name}) => {

  return  fetch(url, {
        method: 'POST',
        body: JSON.stringify({name}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


export {fetchUsers,addUser}
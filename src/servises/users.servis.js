let url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => {
  return fetch(url)
      .then(value => value.json())
}
const getUser = (id) =>{
  return fetch(url + '/'+ id)
      .then(value => value.json())
}

let url2= 'https://jsonplaceholder.typicode.com/posts'

const getPosts = () => {
  return fetch(url2)
      .then(value => value.json())
}

const getPost = (id) => {
  return fetch(url2 +'/'+ id)
      .then(value => value.json())
}
export {getUsers,getUser,getPosts,getPost}
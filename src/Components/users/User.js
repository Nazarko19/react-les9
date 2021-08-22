import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route


} from "react-router-dom";
export default function User({item,history}) {
  const navigaTor = () => {
    history.push(`/users/${item.id}`)
  }
  return (
    <div>
      {item.name} - <button onClick={navigaTor}>go to details</button>
      {/*{`/users/${item.id}`}*/}

    </div>
  );
}
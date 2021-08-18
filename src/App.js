import './App.css'
import './components/users/Users.css'
import './components/posts/Posts.css'
import './components/commens/Comments.css'
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter

} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/commens/Comments";
export default function App() {
  return (
      <Router>
    <div className={'wrap'}>
        <Link to={'/'}>no-page</Link>
        <Link to={'/users-page'}> Users </Link>
        <Link to={'/posts-page'}>Posts</Link>
        <Link to={'/comments-page'}>Comments</Link>
        </div>
   <div>
        <Route path={'/users-page'}><Users/></Route>

        <Route path={'/posts-page'} render={()=> <Posts/>}/>

        <Route path={'/comments-page'} component={Comments}/>


    </div>
     </Router>
  );
}



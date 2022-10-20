import "./App.css";

import HomePage from './pages/Home' 
import UserFormPage from './pages/UserForm' 
import { Routes, 
  Route,
  Link 
} from "react-router-dom"

function App() {

  return (
    <div className="App">
 
      <ul>
        <li>  <Link to="/"> Home Page </Link> </li>
        <li>  <Link to="/form"> User Form Page </Link> </li> 
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={ <HomePage/>}> </Route>
        <Route path="/form" element={ <UserFormPage/>}> </Route> 
      </Routes> 
  
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=b9eMGE7QtTk
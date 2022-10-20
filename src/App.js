import "./App.css";

import HomePage from './pages/Home' 
import FormPage from './pages/Form' 
import { Routes, 
  Route,
  Link 
} from "react-router-dom"

function App() {

  return (
    <div className="App">
 
      <ul>
        <li>  <Link to="/"> Home Page </Link> </li>
        <li>  <Link to="/form"> Form Page </Link> </li> 
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={ <HomePage/>}> </Route>
        <Route path="/form" element={ <FormPage/>}> </Route> 
      </Routes> 
  
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=b9eMGE7QtTk
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Dash from './Components/Dash/Dash';
import Reset from './Components/Passwordreset/Reset';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element = {<Signup/>} />
          <Route exact path = "/login" element = {<Login/>} />
          <Route exact path = "/dashboard" element = {<Dash/>} />
          <Route exact path = "/reset" element = {<Reset/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

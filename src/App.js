import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Landing from "./Components/Home/Landing";
import PlaceToStay from "./Components/Places/Place_to_stay";


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <Router>
          <Routes>
            <Route path="/"
              element={<Landing/>}/>
            <Route path="/Place_to_stay"
              element={<PlaceToStay/>}/>
          </Routes>
      </Router>
      <br/>
      <Footer/>
    </div>
);
}

export default App;

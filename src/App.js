import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import PlaceToStay from "./Components/Places/PlaceToStay";


const App = () => {
  return (
    <div className="App">

      <Router>
        <NavBar />
          <Routes>
            <Route path="/"
              element={<Home />} />
            <Route path="/place_to_stay"
              element={<PlaceToStay />} />
          </Routes>

          <Footer />
      </Router>

    </div>
);
}

export default App;

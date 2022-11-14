
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Landing from "./Components/Home/Landing";
import PlaceToStay from "./Components/Places/Place_to_stay";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className="Pages">
      <Router>
          <Routes>
            <Route path="/"
              element={<Landing/>}/>
            <Route path="/Place_to_stay"
              element={<PlaceToStay/>}/>
          </Routes>
      </Router>
      <Footer/>
    </div>
);
}

export default App;

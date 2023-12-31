
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Imagebased from './pages/Imagebased';
import Personal from './pages/Personal';
import Psychologybased from './pages/Psychologybased';



function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/imgbased" element={<Imagebased />} />
          <Route exact path="/psychologybased" element={<Psychologybased />} />
          <Route exact path="/personal" element={<Personal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;

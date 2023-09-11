
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Imagebased from './pages/Imagebased';



function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/imgbased" element={<Imagebased />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;

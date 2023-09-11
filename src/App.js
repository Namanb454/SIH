
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage';



function AppRouter() {
  return (
    <Router>
      <div className='bg-[#0e0c27]'>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;

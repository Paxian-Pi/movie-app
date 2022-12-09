import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './layout/AnimatedRoutes';
import ScreenDimensions from './layout/ScreenDimensions'
import Navbar from './layout/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <ScreenDimensions>
          <Navbar />
          <AnimatedRoutes />
        </ScreenDimensions>
      </Router>
    </div>
  );
}

export default App;

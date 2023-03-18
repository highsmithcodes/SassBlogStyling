import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Home from './Pages/Home';
import Single from './Pages/Single';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/posts/:id" 
            element={<Single/>} 
          />
      </Routes>
    </div>
  );
}

export default App;

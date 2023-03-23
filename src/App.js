import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Home from './Pages/Home';
import Single from './Pages/Single';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
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
      <Footer />
    </div>
  );
}

export default App;

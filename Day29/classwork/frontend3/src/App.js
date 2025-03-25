import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Signup from './pages/Signup';
import Allroutes from './routes/Allroutes';

function App() {
  return (
    <div className="App">
      <Allroutes/>
    </div>
  );
}

export default App;

import './App.css';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './pages/homescreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreen />
    </div>
  );
}

export default App;

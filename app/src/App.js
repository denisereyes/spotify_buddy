//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Button from './components/Button.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Routes>
            <Route exact path="/" Component={Button} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

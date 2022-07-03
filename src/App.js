
import './App.css';
import Home from './Pages/Home/Home';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import CreateChallenge from './Pages/CreateChallenge/CreateChallenge';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create-challenge" element={<CreateChallenge/>}></Route>
      </Routes>

     
  );
}

export default App;

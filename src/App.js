
import './App.css';
import Home from './Pages/Home/Home';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import CreateChallenge from './Pages/CreateChallenge/CreateChallenge';
import Details from './Pages/Details/Details';
import Edit from './Pages/Edit/Edit';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create-challenge" element={<CreateChallenge/>}></Route>
        <Route path="/details" element={<Details></Details>}></Route>
        <Route path="/edit" element={<Edit></Edit>}></Route>
      </Routes>

     
  );
}

export default App;

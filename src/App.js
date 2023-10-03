
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
// import SignUp from "./components/Signup";
// import Login from './components/Login';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       {/* <Header/> */}
    <Routes>
      {/* <Route path='/Signup' element={<SignUp/>} />
      <Route path='/' element={<Login/>} /> */}
      <Route path='/' element={<Home/>}/>
      <Route path="/details/:id" element={<Details />} />
    </Routes>
    
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Listapp from './components/Listapp';
import Api from './components/Api';
import Sample from './components/Sample';
import Cardget from './components/Cardget';

function App() {
  return (
    <div className="App">
       <Navbar/><br/>
       <Routes>
        <Route path='/' element={<Register/>}/> 
        <Route path='/sin' element={<Signup/>}/>
        <Route path='/sb' element={<StateBasics/>}/>
        <Route path='/co' element={<Counter/>}/>
        <Route path='/li' element={<Listapp/>}/>
        <Route path='/ap' element={<Api/>}/>
        <Route path='/si' element={<Sample/>}/>
        <Route path='/ca' element={<Cardget/>}/>

       </Routes>
    
 
    </div>
  );
}

export default App;

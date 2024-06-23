import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import View from './Components/View';

function App() {
  return (
<div className="App">
       <Navbar/><br/>
       <Routes>
        <Route path='/add' element={<Add data={{ename:"",eage:"",eposition:"",esalary:""}}method="post"/>}/> 
        <Route path='/vi' element={<View/>}/>

       </Routes>
    
 
    </div>
  );
}


export default App;

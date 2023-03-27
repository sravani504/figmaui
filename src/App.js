import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Allroutes from './Allroutes';
import './App.css';
import Counselling from './components/counselling/Counselling';
import NavTable from './components/NavTable';


function App() {
  return (
    <div className="App">
          {/* <Navbar/> */}
      <Router>
        <Routes>
        
        <Route path='/' element={<NavTable/>} />

        <Route path='/counselling' element={<Counselling />} />

        </Routes>
       
      {/* <Allroutes/> */}
      </Router>
      
    </div>
  );
}

export default App;

import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Certificates from './Components/Certificates';

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route exact path='/shaildave' element={<Home />}  />
          <Route exact path='/shaildave/about' element={<About/>}/>
          <Route exact path='/shaildave/skills' element={<Skills/>}/>
          <Route exact path='/shaildave/projects' element={<Projects/>}/>
          <Route exact path='/shaildave/certificates' element={<Certificates/>}/>
        </Routes>
    </>

  );
}

export default App;


import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Anayemek from './components/Anayemek';

import Arasicak from './components/Arasicak';
import Tatli from './components/Tatli';
import Corba from './components/Corba';
import Sidebar from './components/Sidebar';

function App() {

  return (

    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path = "/" element = {<Anayemek/>}/>

      <Route path = "/Anayemek" element = {<Anayemek/>}/>
      <Route path = "/Arasicak" element = {<Arasicak/>}/>
      <Route path = "/Corba" element = {<Corba/>}/>
      <Route path = "/Tatli" element = {<Tatli/>}/>

     
    </Routes>
    </Sidebar>

    
    </BrowserRouter>


  );
}

export default App;

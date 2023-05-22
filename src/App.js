
import './App.css';
import {NaVbar} from "./Components/Navbar";
import  {Header} from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Section2 } from './Components/Section2';
import { Section3 } from './Components/Section3';
import { Section4 } from './Components/Section4';
import { Section5 } from './Components/Section5';
import {Footer} from './Components/Footer';


function App() {
  return (
    <div className="App">
  <NaVbar/>
<Header/>
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Footer/>
    </div>
  );
}

export default App;

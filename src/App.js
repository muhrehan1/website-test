import React from 'react';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
import Home  from './Home';
import Lets_connect from "./lets_connect";
import BioPackaging from "./BioPackaging";
import Teams from "./Teams";
import Inventors_Partners from "./inventors_partners";

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/bio" element={<BioPackaging />}/>
            <Route path="/investors-and-partners" element={<Inventors_Partners />}/>
            <Route path="/teams" element={<Teams />}/>
            <Route path="/lets-connect" element={<Lets_connect />}/>
          </Routes>
        </BrowserRouter>
    )
  };
}

export default App;
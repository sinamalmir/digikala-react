import React from "react";
import { BrowserRouter } from 'react-router-dom'

// components
import HeaderDesktop from "./components/Header/HeaderDesktop";
import HeaderMobile from "./components/Header/HeaderMobile";
import MobileFooter from './components/Footer/MobileFooter'
import DesktopFooter from './components/Footer/DesktopFooter'
// Routes
import  Routes  from "./Routes/Routes";



function App() {
  return (
    <>
    <BrowserRouter>
        <HeaderDesktop/>
        <HeaderMobile/>
          <Routes />
        <MobileFooter/>
        <DesktopFooter/>
    </BrowserRouter>  
    </>
  );
}

export default App;

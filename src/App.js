import React from "react";

import HeaderDesktop from "./components/Header/HeaderDesktop";
import HeaderMobile from "./components/Header/HeaderMobile";
import  Routes  from "./Routes/Routes";

function App() {
  return (
    <>
      <HeaderDesktop/>
      <HeaderMobile/>
        <Routes />
      
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import "./styles/globalStyle.css"
import { Route, Routes } from "react-router-dom";
import Navbar from "./container/Navbar/navbar";
import { TopStrip } from "./container/TopStrip/TopStrip";
import Footer from "./container/Footer/footer";


function App() {
  
  return (
    <div className="app-css">
  
    
       
      <TopStrip />
      <Navbar/>
      {/* <Routes>
        <Route path="*" element={<HomePage />} exact />

      </Routes> */}
      <div style={{minHeight:'80vh'}}></div>
      <Footer/>
    </div>
  );
}

export default App;


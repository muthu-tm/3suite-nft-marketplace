import React from "react";
import "./App.css";
import "./styles/globalStyle.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./container/Navbar/navbar";
import { TopStrip } from "./container/TopStrip/TopStrip";
import Footer from "./container/Footer/footer";
import HomePage from "./pages/HomePage";
import CreateNFT from "./pages/CreateNFT";

function App() {
  return (
    <div className="app-css">
      <TopStrip />
      <Navbar />
      <Routes>
        <Route path="*" element={<HomePage />} exact />
        <Route path="create-nft" element={<CreateNFT />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

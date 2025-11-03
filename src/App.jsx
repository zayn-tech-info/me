import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className="fixed inset-x-0 top-6 px-4 md:px-8 flex justify-center z-30">
        <div className="w-full md:w-1/2 md:min-w-[300px] max-w-[720px] px-2">
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

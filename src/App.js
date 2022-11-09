import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BoxSection from "./components/Box/BoxSection";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Members from "./components/Members/Members";
import Frontend from "./components/Frontend/Frontend";
import Backend from "./components/Backend/Backend";

function App() {
  const HeaderText = (
    <span>
      Full Stack <i>Magento</i> Agency
    </span>
  );
  const HeaderLinks = [
    {
      title: "Home",
      url: "/mage_4",
    },
    {
      title: "About",
      url: "/mage_4/about",
    },
    {
      title: "Members",
      url: "/mage_4/members",
    },
  ];

  return (
    <>
      <Router>
        <Header title={HeaderText} menu={HeaderLinks} />
        <Routes>
          <Route path="/mage_4" element={<BoxSection />}></Route>
        </Routes>
        <Routes>
          <Route path="/mage_4/about" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/mage_4/members" element={<Members />}></Route>
        </Routes>
        <Routes>
          <Route path="/mage_4/frontend" element={<Frontend />} />
        </Routes>
        <Routes>
          <Route path="/mage_4/backend" element={<Backend />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

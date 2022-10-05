import React, { useState } from "react";
import About from "../About";
import Footer from "../Footer";
import Nav from "../Nav";
import Contact from '../Contact';
// import Project from "../Project";
// import Resume from "../Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About")
  
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />
    }
    if (currentPage === "Contact") {
      return <Contact />
    }
  };
  return (
    <div>
       <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Header;

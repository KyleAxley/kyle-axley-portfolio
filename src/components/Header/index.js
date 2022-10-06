import React, { useState } from "react";
import About from "../About";
import Footer from "../Footer";
import Nav from "../Nav";
import Contact from '../Contact';
import Portfolio from "../Portfolio";
import Resume from "../Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About")
  
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />
    }
    if (currentPage === "Contact") {
      return <Contact />
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />
    }
    if (currentPage === "Resume") {
      return <Resume />
    }
  };
  return (
    <div id="about">
      <header className="header">
        <Nav
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      <main>
        {renderPage()}
        <Footer />
      </main>
    </div>
  );
}

export default Header;

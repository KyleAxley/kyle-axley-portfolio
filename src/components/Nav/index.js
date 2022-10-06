import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
        <ul className="nav-links">
            <li className={currentPage === "About" ? "mx-2 navActive" : "mx-2"}>
                <span href="Portfolio" onClick={() => handlePageChange("About")}>
                | About |
                </span>
            </li>
            
            <li className={currentPage === "Portfolio" ? "mx-2 navActive" : "mx-2"}>
                <span href="Portfolio" onClick={() => handlePageChange("Portfolio")}>
               | Portfolio |
                </span>
            </li>
            
            <li className={currentPage === "Resume" ? "mx-2 navActive" : "mx-2"}>
                <span href="Resume" onClick={() => handlePageChange("Resume")}>
                | Resume | 
                </span>
            </li>
            
            <li className={currentPage === "Contact" ? "mx-2 navActive" : "mx-2"}>
                <span href="Contact" onClick={() => handlePageChange("Contact")}>
                | Contact |  
                </span>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;

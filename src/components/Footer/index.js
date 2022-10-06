import React from 'react';

function Footer() {
    return(
        <footer>
             <strong>Checkout my GitHub and LinkedIn profile</strong>
                <p className="links">
                    | Git hub: | {" "}
                    <a href="https://github.com/KyleAxley" className="links">
                    KyleAxley 
                    </a>
                    | LinkedIn: | {" "}
                    <a href="https://www.linkedin.com/in/kyle-anderson-36300192/" className="links"
                    >
                    Kyle Anderson
                    </a>
                </p>
        </footer>
    )
}

export default Footer; 
import React from 'react';

function Resume() {
    return (
        <section>
            <div>
                <h1>Proficiencies</h1>
            </div>
            <div id="resume-form">
                <ol>
                    <h3>Front-End</h3>
                        <li>HTML</li>
                        -
                        <li>CSS</li>
                        -
                        <li>JavaScript</li>
                        -
                        <li>BootStrap</li>
                        -
                        <li>Materialize</li>
                        -
                        <li>Foundation CSS</li>
                        -
                        <li>React</li>
                        - 
                        <li>React-Bootstrap</li>
                    </ol>
                <ol>
                <h3>Back-End</h3>
                    <li>NodeJs</li>
                    -
                    <li>APIs</li>
                    -
                    <li>Express</li>
                    -
                    <li>Model View Controller</li>
                    -
                    <li>REST</li>
                </ol>
                <ol>
                <h3>Database</h3>
                    <li>MySQL</li>
                    -
                    <li>Sequelize</li>
                    -
                    <li>NoSQL</li>
                    -
                    <li>MongoDB</li>
                    -
                    <li>Mongoose</li>
                    -
                    <li>GraphQl</li>
                </ol>
            <div className="resume-title">
                <h3>Download My Resume Here</h3>
            </div>
            <div className='resume'>
                <a href={require("../../assets/resume/KyleA.Resume.pdf")} download>
                    <br></br>
                    <button className="download-btn">Download Resume</button>
                </a>
            </div>
            </div>
        </section>
    )
}


export default Resume;
import React from 'react';

function Resume() {
    return (
        <section>
            <div>
                <h1>Proficiencies</h1>
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
            </div>
            <div>
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
            </div>

            <div>
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
            </div>
            <div className='resume'>
                    <strong>Download My Resume Here</strong>
                <a href={require("../../assets/resume/KyleA.Resume.pdf")} download>
                    <br></br>
                    <button className="download-btn">Download Resume</button>
                </a>
            </div>
        </section>
    )
}


export default Resume;
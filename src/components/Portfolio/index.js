import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: "Tech-Blog",
            description: "Social networking app for tech blog",
            image: 'Tech-Blog.png',
            deployed: "https://secure-journey-65345.herokuapp.com/",
            github: "https://github.com/KyleAxley/Tech-Blog"
        },
        {
            name: "AstroWatch.io",
            description: "What's in your sky viewer application",
            image: 'Astrowatch.io2.png',
            deployed: "https://devbritt.github.io/fabulous-flamingos/",
            github: "https://github.com/devBritt/fabulous-flamingos"
        },
        {
            name: "Poké TeamWise",
            description: "Pokémon Random Team generator Application.",
            image: 'Poke TeameWise2.png',
            deployed: "https://secure-chamber-40035.herokuapp.com/",
            github: "https://github.com/devBritt/poke-teamwise"
        },
        {
            name: "Work Day Scheduler",
            description: "A simple work day scheduler application",
            image: 'Work Day Scheduler SS2.png',
            deployed: "https://kyleaxley.github.io/Work-Day-Scheduler/",
            github: "https://github.com/KyleAxley/Work-Day-Scheduler"
        },
        {
            name: "Weather Dashboard",
            description: "Weather dashboard application",
            image: 'WeatherCompanion.png',
            deployed: "https://kyleaxley.github.io/Weather-Companion/",
            github: "https://github.com/KyleAxley/Weather-Companion"
        },
        {
            name: "My First Portfolio",
            description: "First portfolio made at begging of the bootcamp",
            image: 'myportfolio.png',
            deployed: "https://kyleaxley.github.io/My-Portfolio-/",
            github: "https://github.com/KyleAxley/My-Portfolio-"
        }
    ];

    return (
        <section >
            <div>
                <h1>Portfolio</h1>
            </div>
            <div id="portfolio-form">
                <ul className='flex-row'>
                    <li className="projects">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="projects">
                        <Project projects={projects[1]}></Project>
                    </li>
                    <li className="projects">
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li className="projects">
                        <Project projects={projects[3]}></Project>
                    </li>
                    <li className="projects">
                        <Project projects={projects[4]}></Project>
                    </li>
                    <li className="projects">
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;
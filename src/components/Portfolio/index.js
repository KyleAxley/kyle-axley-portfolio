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
            image: 'Astrowatch.io2.png'
        },
        {
            name: "AstroWatch.io",
            description: "What's in your sky viewer application",
            image: 'Astrowatch.io2.png'
        },
        {
            name: "AstroWatch.io",
            description: "What's in your sky viewer application",
            image: 'Astrowatch.io2.png'
        },
        {
            name: "AstroWatch.io",
            description: "What's in your sky viewer application",
            image: 'Astrowatch.io2.png'
        },
        {
            name: "AstroWatch.io",
            description: "What's in your sky viewer application",
            image: 'Astrowatch.io2.png'
        }
    ];

    return (
        <section>
            <div>
                <h1>Portfolio</h1>
            </div>
            <div>
                <ul className='flex-row'>
                    <li className="projects">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="projects">
                        <Project projects={projects[1]}></Project>
                    </li>
                    <li className="projects">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="projects">
                        <Project projects={projects[1]}></Project>
                    </li>
                    <li className="projects">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="projects">
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;
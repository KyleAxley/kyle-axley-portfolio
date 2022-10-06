import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: "Tech-Blog",
            description: "Social networking app for tech blog",
            image: 'Tech-Blog.png'
        },
        {
            name: "AstroWatch.io",
            description: "What's in your sky viewer application",
            image: 'Astrowatch.io.png'
        }
    ];

    return (
        <section>
            <div>
                <h1>Portfolio</h1>
            </div>
            <div>
                <ul>
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
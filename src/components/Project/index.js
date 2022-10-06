import React, {useState} from "react";
import Card from "react-bootstrap/Card";

function Projects (props) {
    const portProject = useState(props)[0].projects;
    const name = portProject.name;
    const description = portProject.description;
    const image = portProject.image;
    const deployed = portProject.deployed;
    const github = portProject.github;

    return(
        <Card style={{ width: "25rem"}}>
            <Card.Img className="image" src={require(`../../assets/images/${image}`)}></Card.Img>
            <div className="card-body">
                <Card.Body>
                    <Card.Title>
                       <strong>{name}</strong> 
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Link className="links" href={deployed}>
                       | {name} |
                    </Card.Link>
                    <Card.Link className="links" href={github}>
                       | GitHub Repo |
                    </Card.Link>
                </Card.Body>
            </div>
        </Card>
    )
}

export default Projects;
import React, {useState} from "react";
import Card from "react-bootstrap/Card";

function Projects (props) {
    const portProject = useState(props)[0].projects;
    const name = portProject.name;
    const description = portProject.description;
    const image = portProject.image;

    return(
        <Card style={{ width: "18rem"}}>
            <Card.Img className="image" src={require(`../../assets/${image}`)}></Card.Img>
            <div className="card-body">
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    )
}

export default Projects;
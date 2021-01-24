import React from 'react';

const ProjectItem = ({id, name, html_url, description, url, cardSize}) => {
    return(
        <div id={`project ${id}`} className={`project-item${cardSize ? " project-item-"+cardSize : "" }`}>
            <h2 style={{textAlign: "center", background: "#1f2937 "}}>
                <a href={html_url} target="_blank">
                    {name}
                </a>
            </h2>
            <p>{description}</p>
        </div>
    )
}
export default ProjectItem;
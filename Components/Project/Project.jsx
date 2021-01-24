import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";

const GITHUB_REPOS_URL = "https://api.github.com/users/iankit3/repos";

const filterStarCount = (cardSize, repo) => {
    return cardSize === "big" ? repo.stargazers_count >= 0 : true
}

const Project = ({limit, cardSize}) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(GITHUB_REPOS_URL);
      const repos = await res.json();

      setProjects(
        repos.filter(repo => (repo.fork == false && filterStarCount(cardSize, repo) ) ).map(({ id, name, html_url, description, url }) => {
          return { id, name, html_url, description, url };
        }).slice(0, limit ? limit : repos.length-1)
      );
    })();

  }, []);

  return (
    <div className="project-wrapper">
      {projects.map((project) => {
        return <ProjectItem key={project.id} {...project} cardSize={cardSize}/>;
      })}
    </div>
  );
};

export default Project;

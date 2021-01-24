import React from 'react';
import Head from "next/head";
import { Wrapper } from "@components/Page";
import Project from "@components/Project/Project";

function ProjectsPage() {
    return (
      <Wrapper>
        <Head>
          <title>{"My Projects"}</title>
        </Head>
        <article>
          <h2>My Projects</h2>
          <Project />
        </article>
      </Wrapper>
    );
  }
  
  export default ProjectsPage;
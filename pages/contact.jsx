import React from "react";
import Head from "next/head";
import { Wrapper } from "@components/Page";
import Project from "@components/Project/Project";

function ContactPage() {
  return (
    <Wrapper>
      <Head>
        <title>{"Contact"}</title>
      </Head>
      <article>
        <h2>Find me</h2>
        <address>
          Email- <a href="mailto:a4ankit@outlook.com">a4ankit@outlook.com</a>  <br />
          Twitter - DM me on <a href="https://twitter.com/iankit3">@iankit3</a>
        </address>
      </article>
    </Wrapper>
  );
}

export default ContactPage;

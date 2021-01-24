import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Wrapper } from "../Components/Page";
import Project from "@components/Project/Project";

function AboutPage({ frontmatter, markdownBody }) {
  return (
    <Wrapper>
      <Head>
        <title>{"About"}</title>
      </Head>
      <article>
        <h1>{frontmatter.title}</h1>
        <ReactMarkdown source={markdownBody} />
      </article>
    </Wrapper>
  );
}

export default AboutPage;

export async function getStaticProps() {
  const content = await import(`@content/about.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

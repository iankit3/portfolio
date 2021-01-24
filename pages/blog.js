import Head from "next/head";
import Page, { Wrapper } from "../Components/Page";
import PostList from "@components/PostList";
import matter from "gray-matter";

function BlogPage({ posts }) {
  return (
    <Wrapper>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
        <PostList posts={posts} />
      </main>
    </Wrapper>
  );
}

export default BlogPage;

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);

      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("@content/posts", true, /\.md$/));

  return {
    props: {
      posts: posts,
    },
  };
}

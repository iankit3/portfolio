import { Wrapper } from "@components/Page";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const Post = ({ frontmatter, markdownBody, selectedRouteIndex }) => {
  return (
    <article>
      {selectedRouteIndex}
      <h1>{frontmatter.title}</h1>
      <p>By {frontmatter.author}</p>
      <ReactMarkdown source={markdownBody} />
    </article>
  );
};

export default function BlogPost(props) {
  return (
    <Wrapper>
      <Post {...props} />
    </Wrapper>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`@content/posts/${postname}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}
export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("@content/posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

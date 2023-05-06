import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Post = ({ post }) => {
  return (
    <article>
      <faMagnifyingGlass />
      <h2 className="post__title">{post.title}</h2>
      <p className="post__body">{post.body}</p>
      <p className="post__ID">Post ID: {post.id}</p>
    </article>
  );
};

export default Post;

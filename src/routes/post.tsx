import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  if (!res.ok) throw Error('Not Found');
  const post = await res.json();
  return { post };
}

const Post = () => {
  const { post } = useLoaderData();
  return (
    <>
      <h2>Single Post</h2>
      <p>{post.id}</p>
      <p>{post.userId}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

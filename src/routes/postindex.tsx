import { Link, useLoaderData } from 'react-router-dom';

export const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return { posts };
};

const PostIndex = () => {
  const { posts } = useLoaderData();
  return (
    <>
      <h2 className='text-semibold text-xl my-2'>Posts</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link to={`${post.id}`}>
              {post.id}: {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostIndex;

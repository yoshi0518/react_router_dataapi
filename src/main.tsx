import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import About from './routes/about';
import Contact from './routes/contact';
import ErrorPage from './routes/error-page';
import Home from './routes/home';
import Post, { loader as postLoader } from './routes/post';
import PostIndex, { loader as postsLoader } from './routes/postindex';
import Posts from './routes/posts';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'posts',
        element: <Posts />,
        children: [
          {
            index: true,
            element: <PostIndex />,
            loader: postsLoader,
          },
          {
            path: ':postId',
            element: <Post />,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

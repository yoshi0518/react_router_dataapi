import { Link, Outlet } from 'react-router-dom';

const Root = () => (
  <>
    <h1 className='text-center text-semibold text-2xl'>Hello React Router Data API</h1>
    <h2 className='text-semibold text-xl my-2'>ナビゲーション</h2>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
    </ul>
    <h2 className='text-semibold text-xl my-2'>コンテンツ</h2>
    <Outlet />
  </>
);

export default Root;

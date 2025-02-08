import Link from 'next/link';

const Header = () => {
  return (
    <header className='mb-4 h-20 p-4 flex justify-between items-center border-b-4 border-blue-950'>
      <p>OFFside (The place for all footbal content)</p>
      <Link href='/posts'>Posts</Link>
    </header>
  );
};

export default Header;

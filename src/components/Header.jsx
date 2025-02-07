import Link from 'next/link';

const Header = () => {
  return (
    <header className='h-16 p-4 flex justify-between items-center'>
      <p>OFFside (The place for all footbal content)</p>
      <Link href='/posts'>Posts</Link>
    </header>
  );
};

export default Header;

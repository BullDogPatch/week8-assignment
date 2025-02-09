import { FaPlus } from 'react-icons/fa6';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='mb-4 h-20 p-4 flex justify-between items-center border-b-4 border-blue-950'>
      <p className='font-bold text-2xl'>OFFside</p>
      <div className='flex justify-center items-center'>
        <Link
          href='/new-post'
          className='m-3 p-2 flex items-center rounded-xl hover:bg-slate-700'
        >
          <FaPlus className='mr-1' />
          <span>Create</span>
        </Link>
        <Link
          href='/posts'
          className='m-3 p-2 flex items-center rounded-xl hover:bg-slate-700'
        >
          Posts
        </Link>
      </div>
    </header>
  );
};

export default Header;

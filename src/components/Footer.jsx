import { FaSquareGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='h-[90px] flex justify-between items-center p-4 border-t-4 border-blue-950'>
      <p className='made-by'>Made with ❤️ by Craig Clayton</p>
      <a
        href='https://github.com/BullDogPatch/week8-assignment'
        target='_blank'
        rel='noopener noreferrer'
        className='github-link'
      >
        <FaSquareGithub size={30} />
      </a>
    </footer>
  );
};

export default Footer;

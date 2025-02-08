import { fetchCommentsByPostId } from '@/utils/api';
import { FiMessageCircle } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const Post = ({ post }) => {
  const commentstotal = async (id) => {
    const { rows: comments } = await fetchCommentsByPostId(post.id);
    return comments.length;
  };
  return (
    <li className='m-6 flex justify-center overflow-hidden rounded-lg shadow-lg bg-gray-700 hover:bg-gray-800 text-left'>
      <Link href={`/posts/${post.id}`} className='flex flex-col p-4 w-full'>
        <p className='text-sm font-bold text-slate-950 hover:underline'>
          u/{post.username}
        </p>
        <span className='my-2 text-lg font-semibold'>{post.heading}</span>

        <Image
          src={post.src}
          alt={post.heading}
          width={300}
          height={300}
          className='my-2 w-[367px] h-[350px] object-cover rounded-md'
        />

        <span className='mt-2 w-14 text-sm text-gray-500 rounded-xl px-2 bg-gray-900 hover:bg-gray-950 flex flex-row items-center'>
          <FiMessageCircle className='m-1 text-xl font-extrabold' />
          <p className='m-1 font-bold'>{commentstotal(post.id)}</p>
        </span>
      </Link>
    </li>
  );
};

export default Post;

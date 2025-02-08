import { fetchCommentsByPostId, fetchPosts } from '@/utils/api';
import { FiMessageCircle } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const PostsPage = async ({ searchParams }) => {
  const query = await searchParams;
  const { rows: posts } = await fetchPosts();

  const commentstotal = async (id) => {
    const { rows: comments } = await fetchCommentsByPostId(id);
    return comments.length;
  };

  // Sort by title of post
  query.sort === 'desc'
    ? posts.sort((a, b) => b.heading.localeCompare(a.heading))
    : posts.sort((a, b) => a.heading.localeCompare(b.heading));

  return (
    <div className='max-w-md m-auto'>
      <Link
        href='/posts?sort=asc'
        className='m-2 px-3 py-2 text-sm bg-slate-800 rounded-md hover:bg-gray-900'
      >
        A-Z
      </Link>
      <Link
        href='/posts?sort=desc'
        className='m-2 px-3 py-2 text-sm bg-slate-800 rounded-md hover:bg-gray-900'
      >
        Z-A
      </Link>
      <ul className=''>
        {posts.map((post) => (
          <li
            key={post.id}
            className='m-6 flex justify-center overflow-hidden rounded-lg shadow-lg bg-gray-700 hover:bg-gray-800 text-left'
          >
            <Link
              href={`/posts/${post.id}`}
              className='flex flex-col gap-4 p-4 w-full'
            >
              <p className='text-sm font-bold text-slate-950'>
                u/{post.username}
              </p>
              <span className='text-lg font-semibold'>{post.heading}</span>

              <Image
                src={post.src}
                alt={post.heading}
                width={300}
                height={300}
                className='w-[367px] h-[350px] object-cover rounded-md'
              />

              <span className='w-14 text-sm text-gray-500 rounded-xl px-2 bg-gray-900 hover:bg-gray-950 flex flex-row items-center'>
                <FiMessageCircle className='m-1 text-xl font-extrabold' />
                <p className='m-1 font-bold'>{commentstotal(post.id)}</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

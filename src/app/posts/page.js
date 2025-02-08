import { fetchPosts } from '@/utils/api';

import Link from 'next/link';
import Post from '@/components/Post';

const PostsPage = async ({ searchParams }) => {
  const query = await searchParams;
  const { rows: posts } = await fetchPosts();

  // Sort by title of post
  query.sort === 'desc'
    ? posts.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    : posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <div className='max-w-md m-auto'>
      <Link
        href='/posts?sort=asc'
        className='px-3 py-2 text-sm bg-slate-800 rounded-md hover:bg-gray-900'
      >
        Newest
      </Link>
      <Link
        href='/posts?sort=desc'
        className='m-2 px-3 py-2 text-sm bg-slate-800 rounded-md hover:bg-gray-900'
      >
        Oldest
      </Link>
      <ul className=''>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

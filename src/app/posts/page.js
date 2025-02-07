import { fetchCommentsByPostId, fetchPosts } from '@/utils/api';
import { formatDate } from '@/utils/dateFormatter';
import Image from 'next/image';
import Link from 'next/link';

const PostsPage = async () => {
  const { rows: posts } = await fetchPosts();

  const commentstotal = async (id) => {
    const { rows: comments } = await fetchCommentsByPostId(id);
    return comments.length;
  };

  return (
    <div className='max-w-md m-auto'>
      <ul className=''>
        {posts.map((post) => (
          <li key={post.id} className='m-6 flex justify-center'>
            <Link
              href={`/posts/${post.id}`}
              className='flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md w-fit'
            >
              <span className='text-lg font-semibold'>{post.username}</span>

              <Image
                src={post.src}
                alt={post.heading}
                width={300}
                height={300}
                className='w-[300px] h-[300px] object-cover rounded-md'
              />

              <p className='text-gray-500'>{formatDate(post.created_at)}</p>

              <p className='text-sm text-gray-700'>
                {commentstotal(post.id)} comments
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

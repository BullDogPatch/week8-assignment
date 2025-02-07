import { fetchCommentsByPostId, fetchPosts } from '@/utils/api';
import { formatDate } from '@/utils/dateFormatter';
import Image from 'next/image';
import Link from 'next/link';

// const commentTotal = fetchCommentsByPostId(id);
const PostsPage = async () => {
  const { rows: posts } = await fetchPosts();

  const commentstotal = async (id) => {
    const { rows: comments } = await fetchCommentsByPostId(id);
    return comments.length;
  };
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <p>{post.username}</p>
              <Image
                src={post.src}
                alt={post.heading}
                width={300}
                height={300}
                // className='w-[300px] h-[3000px]'
                // style={{ width: '300px', height: '300px' }}
              />
              <p>{formatDate(post.created_at)}</p>
              <p>{commentstotal(post.id)} comments</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

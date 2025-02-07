import { fetchPosts } from '@/utils/api';
import { formatDate } from '@/utils/dateFormatter';
import Image from 'next/image';

const PostsPage = async () => {
  const { rows: posts } = await fetchPosts();
  console.log(posts);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

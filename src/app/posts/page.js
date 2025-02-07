import { fetchPosts } from '@/utils/api';
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
              style={{ width: '300px', height: '300px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

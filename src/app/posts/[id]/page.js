import DeleteForm from '@/components/DeleteForm';
import { fetchPostById } from '@/utils/api';
import { formatDate } from '@/utils/dateFormatter';
import Image from 'next/image';

const SinglePostPage = async ({ params }) => {
  const { id } = await params;
  const { rows: postBydId } = await fetchPostById(id);
  console.log(postBydId);

  return (
    <div>
      {postBydId.map((post) => (
        <div key={post.id}>
          <h3>{post.heading}</h3>
          <p>{post.username}</p>
          <Image src={post.src} alt={post.heading} width={500} height={500} />
          <p>{post.content}</p>
          <p>{formatDate(post.created_at)}</p>
          <DeleteForm id={post.id} />
        </div>
      ))}
    </div>
  );
};

export default SinglePostPage;

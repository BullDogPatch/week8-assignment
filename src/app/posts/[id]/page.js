import Comment from '@/components/Comment';
import DeleteForm from '@/components/DeleteForm';
import { fetchCommentsByPostId, fetchPostById } from '@/utils/api';
import { formatDate } from '@/utils/dateFormatter';
import Image from 'next/image';

const SinglePostPage = async ({ params }) => {
  const { id } = await params;
  const { rows: postBydId } = await fetchPostById(id);
  console.log(postBydId);

  const { rows: comments } = await fetchCommentsByPostId(id);
  console.log(comments);

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
      <ul className='border-2 border-red-500'>
        {comments.length < 1 ? (
          <p>Be the first to add a comment</p>
        ) : (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
      </ul>
    </div>
  );
};

export default SinglePostPage;

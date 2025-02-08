import AddCommentForm from '@/components/AddCommentForm';
import Comment from '@/components/Comment';
import DeleteForm from '@/components/DeleteForm';
import { fetchCommentsByPostId, fetchPostById } from '@/utils/api';
import { formatDate } from '@/utils/dateFormatter';
import Image from 'next/image';
import Link from 'next/link';

const SinglePostPage = async ({ params }) => {
  const { id } = await params;
  const { rows: postBydId } = await fetchPostById(id);

  const { rows: comments } = await fetchCommentsByPostId(id);

  return (
    <div>
      {postBydId.map((post) => (
        <div key={post.id}>
          <p>{post.username}</p>
          <h3>{post.heading}</h3>
          <Image src={post.src} alt={post.heading} width={500} height={500} />
          <p>{post.content}</p>
          <p>{formatDate(post.created_at)}</p>
          <DeleteForm id={post.id} />
          <Link href={`/posts/${post.id}/edit-post`}>Edit</Link>
        </div>
      ))}
      <div className='border-2 border-red-500'>
        <AddCommentForm id={id} />
        {comments.length < 1 ? (
          <p>Be the first to add a comment</p>
        ) : (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
};

export default SinglePostPage;

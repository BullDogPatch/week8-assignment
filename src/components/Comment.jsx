import { formatDate } from '@/utils/dateFormatter';
import Link from 'next/link';

const Comment = ({ postId, comment }) => {
  return (
    <div className='bg-slate-500'>
      <p>{comment.username}</p>
      <p>{comment.description}</p>
      <p>{formatDate(comment.created_at)}</p>
      <Link href={`/posts/${postId}/comments/${comment.id}/edit-comment`}>
        Edit
      </Link>
    </div>
  );
};

export default Comment;

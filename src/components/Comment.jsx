import { formatDate } from '@/utils/dateFormatter';
import Link from 'next/link';

const Comment = ({ postId, comment }) => {
  return (
    <div className='w-full p-2 mr-4 my-4 bg-slate-500 rounded-md relative'>
      <p className='px-1 text-sm'>{comment.username}</p>
      <p className='px-1'>{comment.description}</p>
      <p className='p-1 text-xs'>{formatDate(comment.created_at)}</p>
      <Link
        href={`/posts/${postId}/comments/${comment.id}/edit-comment`}
        className='text-sm absolute bottom-1 right-2 bg-green-700 rounded-md px-2 border-2 border-black'
      >
        Edit
      </Link>
    </div>
  );
};

export default Comment;

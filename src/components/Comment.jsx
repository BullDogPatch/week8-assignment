import { formatDate } from '@/utils/dateFormatter';
import Link from 'next/link';

const Comment = ({ postId, comment }) => {
  return (
    <div className='w-[100%] p-4 my-4 bg-slate-700 rounded-lg shadow-lg text-white relative'>
      <p className='mb-1 text-sm font-semibold text-blue-300'>
        {comment.username}
      </p>
      <p className='mb-2 text-base'>{comment.description}</p>
      <p className='text-xs text-gray-400'>{formatDate(comment.created_at)}</p>
      <Link
        href={`/posts/${postId}/comments/${comment.id}/edit-comment`}
        className='absolute bottom-2 right-2 px-3 py-1 text-sm bg-green-600 hover:bg-green-500 rounded-md border border-gray-500 transition'
      >
        Edit
      </Link>
    </div>
  );
};

export default Comment;

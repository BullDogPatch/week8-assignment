import { formatDate } from '@/utils/dateFormatter';
import Link from 'next/link';

const Comment = ({ postId, comment }) => {
  return (
    <div className='w-[100%] p-4 my-4 border-b-2 border-b-black text-white relative'>
      <p className='mb-1 text-sm font-semibold text-blue-300 hover:underline'>
        {comment.username}
      </p>
      <p className='mb-2'>{comment.description}</p>
      <p className='text-xs text-gray-400'>{formatDate(comment.created_at)}</p>
      <Link
        href={`/posts/${postId}/comments/${comment.id}/edit-comment`}
        className='absolute bottom-3 right-3 px-3 py-1 text-xs bg-green-600 hover:bg-green-800 rounded-md border border-gray-500 transition'
      >
        Edit
      </Link>
    </div>
  );
};

export default Comment;

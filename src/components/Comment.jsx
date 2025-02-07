import { formatDate } from '@/utils/dateFormatter';

const Comment = ({ comment }) => {
  return (
    <li className='border-2 border-blue-500'>
      <p>{comment.username}</p>
      <p>{comment.description}</p>
      <p>{formatDate(comment.created_at)}</p>
    </li>
  );
};

export default Comment;

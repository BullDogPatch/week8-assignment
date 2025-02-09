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
    <div className='w-full m-auto flex flex-col justify-center items-center'>
      {postBydId.map((post) => (
        <div
          key={post.id}
          className='mb-4 p-5 flex flex-col gap-2 m-auto w-[50%] rounded-md border-2 border-red-400'
        >
          <p className='text-sm font-bold text-slate-600 hover:underline'>
            u/{post.username}
          </p>
          <h3>{post.heading}</h3>
          <Image
            src={post.src}
            alt={post.heading}
            width={500}
            height={500}
            className='rounded-lg'
          />
          <p>{post.content}</p>
          <p className='text-gray-500 text-sm font-bold'>
            {formatDate(post.created_at)}
          </p>
          <div className='m-auto flex justify-center items-center'>
            <DeleteForm id={post.id} />
            <Link
              href={`/posts/${post.id}/edit-post`}
              className='text-center w-[100px] m-1 p-1 bg-green-600 rounded-lg hover:bg-green-800'
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
      <div className='w-[50%]'>
        <AddCommentForm id={id} />
        {comments.length < 1 ? (
          <p>Be the first to add a comment</p>
        ) : (
          comments.map((comment) => (
            <Comment key={comment.id} postId={id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
};

export default SinglePostPage;

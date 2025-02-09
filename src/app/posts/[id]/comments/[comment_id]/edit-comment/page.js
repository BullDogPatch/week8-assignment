import SubmitButton from '@/components/SubmitButton';
import { editComment } from '@/utils/actions';
import { fetchCommentByCommentId } from '@/utils/api';
import Link from 'next/link';

const EditCommentForm = async ({ params }) => {
  const { id, comment_id } = await params;

  const { rows } = await fetchCommentByCommentId(comment_id);
  const { description } = rows[0];

  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
      <form action={editComment} className='flex flex-col w-[400px]'>
        <Link
          href={`/posts/${id}`}
          className='text-blue-500 hover:underline mb-4 block'
        >
          ← Back
        </Link>
        <input type='hidden' name='id' value={comment_id} />
        <label htmlFor='description' className='font-bold'>
          Edit comment
        </label>
        <textarea
          name='description'
          id='description'
          defaultValue={description}
          rows={7}
          className=' p-3 m-3 text-slate-950 resize-none rounded-sm'
        ></textarea>
        <SubmitButton
          classNames={
            'm-auto w-[30%] p-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition'
          }
          text='submit'
        />
      </form>
    </div>
  );
};

export default EditCommentForm;

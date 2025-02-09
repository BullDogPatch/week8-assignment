import SubmitButton from '@/components/SubmitButton';
import { editComment } from '@/utils/actions';
import { fetchCommentByCommentId } from '@/utils/api';

const EditCommentForm = async ({ params }) => {
  const { comment_id } = await params;

  const { rows } = await fetchCommentByCommentId(comment_id);
  const { description } = rows[0];

  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
      <form action={editComment} className='flex flex-col w-[400px]'>
        <input type='hidden' name='id' value={comment_id} />
        <label htmlFor='description'>Edit comment</label>
        <textarea
          name='description'
          id='description'
          defaultValue={description}
          rows={7}
          className='text-slate-950 resize-none'
        ></textarea>
        <SubmitButton
          classNames={
            'm-auto w-[30%] p-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition'
          }
        />
      </form>
    </div>
  );
};

export default EditCommentForm;

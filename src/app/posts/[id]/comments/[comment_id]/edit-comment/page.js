import { fetchCommentsByPostId } from '@/utils/api';

const EditCommentForm = async ({ params }) => {
  const { comment_id } = await params;
  const { rows } = await fetchCommentsByPostId(comment_id);
  const { description } = rows[0];

  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
      <form className='flex flex-col w-[400px]'>
        <input type='hidden' />
        <label htmlFor='description'>Edit comment</label>
        <textarea
          name='description'
          id='description'
          defaultValue={description}
          rows={7}
          className='text-slate-950 resize-none'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default EditCommentForm;

import { editPost } from '@/utils/actions';
import { fetchPostById } from '@/utils/api';

const EditPostForm = async ({ params }) => {
  const { id } = await params;
  const { rows } = await fetchPostById(id);
  const { heading, content, src } = rows[0];
  return (
    <div>
      <form action={editPost} className='flex flex-col '>
        <input type='hidden' name='id' value={id} />
        <input
          type='text'
          name='heading'
          defaultValue={heading}
          className='text-slate-950'
        />
        <input
          type='text'
          name='src'
          defaultValue={src}
          className='text-slate-950'
        />
        <textarea
          name='content'
          defaultValue={content}
          className='text-slate-950'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default EditPostForm;

import { createComment } from '@/utils/actions';

const AddCommentForm = ({ id }) => {
  return (
    <div>
      <form action={createComment} className='mb-4 flex flex-col'>
        <input type='hidden' name='id' value={id} required />
        <input type='text' name='username' placeholder='username' required />
        <textarea
          name='description'
          id=''
          placeholder='leave a comment here'
        ></textarea>
        <button type='submit'>Leave comment</button>
      </form>
    </div>
  );
};

export default AddCommentForm;

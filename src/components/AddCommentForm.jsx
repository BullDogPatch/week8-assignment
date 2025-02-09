import { createComment } from '@/utils/actions';
import SubmitButton from './SubmitButton';

const AddCommentForm = ({ id }) => {
  return (
    <div>
      <form action={createComment} className='mb-4 flex flex-col'>
        <input type='hidden' name='id' value={id} required />
        <input
          type='text'
          name='username'
          placeholder='username'
          required
          className='text-gray-900 mt-2 p-2 rounded-sm'
        />
        <textarea
          name='description'
          id=''
          placeholder='leave a comment here'
          className='mb-4 text-gray-900 mt-2 p-2 resize-none rounded-sm'
        ></textarea>
        <SubmitButton
          classNames={
            'm-auto w-[30%] p-2 text-white bg-red-600 rounded-md hover:bg-red-700 disabled:hover:bg-red-400 transition'
          }
          text='leave comment'
        />
      </form>
    </div>
  );
};

export default AddCommentForm;

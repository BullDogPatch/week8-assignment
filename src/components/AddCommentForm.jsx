import { createComment } from '@/utils/actions';
import SubmitButton from './SubmitButton';

const AddCommentForm = ({ id }) => {
  return (
    <div className=''>
      <form action={createComment} className='mb-7 flex flex-col gap-4'>
        <input type='hidden' name='id' value={id} required />
        <input
          type='text'
          name='username'
          placeholder='Username'
          required
          className='w-[90%] m-auto text-gray-900 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <textarea
          name='description'
          placeholder='Leave a comment here...'
          required
          className='w-[90%] m-auto text-gray-900 p-2 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 h-32'
        ></textarea>
        <SubmitButton
          classNames=' sm:w-[30%] mx-auto mt-4 p-2 text-white bg-red-600 rounded-md hover:bg-red-700 disabled:hover:bg-red-400 transition'
          text='Leave Comment'
        />
      </form>
    </div>
  );
};

export default AddCommentForm;

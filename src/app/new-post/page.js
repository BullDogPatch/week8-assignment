import SubmitButton from '@/components/SubmitButton';
import { createPost } from '@/utils/actions';

export const metadata = {
  title: 'New Post',
  description: 'Edit a post.',
};

const NewPostPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <form
        action={createPost}
        className='flex flex-col w-full max-w-md gap-4 p-6 border border-gray-300 rounded-lg shadow-md'
      >
        <label htmlFor='username' className='text-sm font-medium'>
          Username:
        </label>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='username'
          className='text-gray-900 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
        />

        <label htmlFor='heading' className='text-sm font-medium'>
          Title:
        </label>
        <input
          type='text'
          name='heading'
          id='heading'
          placeholder='Enter title here'
          className='text-gray-900 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
        />

        <label htmlFor='src' className='text-sm font-medium'>
          Share a pic:
        </label>
        <input
          type='text'
          name='src'
          id='src'
          placeholder='www.example.com'
          className='text-gray-900 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
        />

        <label htmlFor='content' className='text-sm font-medium'>
          Leave your thoughts:
        </label>
        <textarea
          name='content'
          id='content'
          rows={7}
          className='text-gray-900 w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500'
        ></textarea>

        <SubmitButton
          classNames={
            'w-full p-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition'
          }
          text='submit'
        />
      </form>
    </div>
  );
};

export default NewPostPage;

import SubmitButton from '@/components/SubmitButton';
import { editPost } from '@/utils/actions';
import { fetchPostById } from '@/utils/api';
import Link from 'next/link';

const EditPostForm = async ({ params }) => {
  const { id } = await params;
  const { rows } = await fetchPostById(id);
  const { heading, content, src } = rows[0];

  return (
    <div className='flex justify-center items-center min-h-[80vh] p-6'>
      <div className='w-full max-w-lg p-6 rounded-lg shadow-lg'>
        <Link
          href={`/posts/${id}`}
          className='text-blue-500 hover:underline mb-4 block'
        >
          ← Back
        </Link>
        <form action={editPost} className='flex flex-col gap-4'>
          <input type='hidden' name='id' value={id} />
          <input
            type='text'
            name='heading'
            defaultValue={heading}
            className='text-gray-900 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='Heading'
          />
          <input
            type='text'
            name='src'
            defaultValue={src}
            className='text-gray-900 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='Image URL'
          />
          <textarea
            name='content'
            defaultValue={content}
            className='text-gray-900 p-3 border resize-none border-gray-300 rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='Content'
          ></textarea>
          <div className='flex justify-center'>
            <SubmitButton
              classNames='w-32 p-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition'
              text='Submit'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostForm;

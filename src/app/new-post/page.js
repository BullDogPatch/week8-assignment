import { newPost } from '@/utils/api';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const NewPostPage = async () => {
  const handleSubmit = async (formData) => {
    'use server';

    const username = formData.get('username');
    const heading = formData.get('heading');
    const src = formData.get('src');
    const content = formData.get('content');

    await newPost(username, heading, content, src);
    revalidatePath('/posts');
    redirect('/posts');
  };
  return (
    <div>
      <form action={handleSubmit} className='m-auto flex flex-col w-60'>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='username'
        />
        <label htmlFor='heading'>Title:</label>
        <input
          type='text'
          name='heading'
          id='heading'
          placeholder='enter title here'
        />
        <label htmlFor='src'>Share a pic:</label>
        <input type='text' name='src' id='src' placeholder='www.example.com' />
        <label htmlFor='content'>Leave your thoughts:</label>
        <textarea type='text' name='content' id='content' rows={7}></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewPostPage;

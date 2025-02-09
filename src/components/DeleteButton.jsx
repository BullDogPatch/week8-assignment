'use client';
import { useFormStatus } from 'react-dom';

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='w-[100px] m-1 p-1 bg-red-600 rounded-lg hover:bg-red-800'
    >
      {pending ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteButton;

'use client';
import { useFormStatus } from 'react-dom';

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' disabled={pending}>
      {pending ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteButton;

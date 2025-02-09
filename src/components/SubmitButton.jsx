'use client';

import { useFormStatus } from 'react-dom';

const SubmitButton = ({ classNames }) => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' disabled={pending} className={classNames}>
      {pending ? 'submiting...' : 'Submit'}
    </button>
  );
};

export default SubmitButton;

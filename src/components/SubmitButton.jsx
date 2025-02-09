'use client';

import { useFormStatus } from 'react-dom';

const SubmitButton = ({ classNames, text }) => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' disabled={pending} className={classNames}>
      {pending ? 'submiting...' : text}
    </button>
  );
};

export default SubmitButton;

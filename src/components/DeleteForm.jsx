import { deletePost } from '@/utils/actions';
import DeleteButton from './DeleteButton';

// credit here goes to this video (https://www.youtube.com/watch?v=S9rL4_UDLFQ)

const DeleteForm = ({ id }) => {
  return (
    <form action={deletePost}>
      <input type='hidden' name='id' value={id} />
      <DeleteButton />
    </form>
  );
};

export default DeleteForm;

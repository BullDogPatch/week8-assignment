import { deletePost } from '@/utils/actions';

// credit here goes to this video (https://www.youtube.com/watch?v=S9rL4_UDLFQ)

const DeleteForm = ({ id }) => {
  return (
    <form action={deletePost}>
      <input type='hidden' name='id' value={id} />
      <button>Delete Post</button>
    </form>
  );
};

export default DeleteForm;

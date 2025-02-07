import { db } from './dbConnection';

export const fetchPosts = async () => {
  const posts = db.query(`SELECT * FROM blogs`);
  return await posts;
};

export const fetchPostById = async (id) => {
  const blogByid = await db.query(`SELECT * FROM blogs WHERE id = $1`, [id]);
  return blogByid;
};

export const fetchCommentsByPostId = async (id) => {
  const comments = await db.query(`SELECT * FROM comments WHERE blog_id = $1`, [
    id,
  ]);
  return comments;
};

import { db } from './dbConnection';

export const fetchPosts = async () => {
  const posts = db.query(`SELECT * FROM blogs`);
  return await posts;
};

export const newPost = async (username, heading, content, src) => {
  const post = await db.query(
    `INSERT INTO blogs (username, heading, content, src) VALUES ($1, $2, $3, $4)`,
    [username, heading, content, src]
  );
  return post;
};

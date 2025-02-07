import { db } from './dbConnection';

export const fetchPosts = async () => {
  const posts = db.query(`SELECT * FROM blogs`);
  return await posts;
};

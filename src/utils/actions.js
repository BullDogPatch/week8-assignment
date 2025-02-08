'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from './dbConnection';

export const createPost = async (formData) => {
  const username = formData.get('username');
  const heading = formData.get('heading');
  const content = formData.get('content');
  const src = formData.get('src');
  await db.query(
    `INSERT INTO blogs (username, heading, content, src) VALUES ($1, $2, $3, $4)`,
    [username, heading, content, src]
  );
  revalidatePath('/posts');
  redirect('/posts');
};

export const createComment = async (formData) => {
  const id = formData.get('id');
  const username = formData.get('username');
  const description = formData.get('description');

  await db.query(
    `INSERT INTO comments (blog_id, username, description) VALUES ($1, $2, $3)`,
    [id, username, description]
  );
  revalidatePath('/posts');
};

export const deletePost = async (formData) => {
  const id = formData.get('id');
  await db.query(`DELETE FROM blogs WHERE id = $1`, [id]);
  revalidatePath('/posts');
  redirect('/posts');
};

export const editPost = async (formData) => {
  const id = formData.get('id');
  const heading = formData.get('heading');
  const content = formData.get('content');
  const src = formData.get('src');
  await db.query(
    `UPDATE blogs SET heading = $1, content = $2, src = $3 WHERE id = $4`,
    [heading, content, src, id]
  );
  revalidatePath(`/posts/${id}`);
  revalidatePath('/posts');
  redirect(`/posts/${id}`);
};

export const editComment = async (formData) => {
  const id = formData.get('id');
  const description = formData.get('description');
  const { rows } = await db.query(
    `SELECT blog_id FROM comments WHERE id = $1`,
    [id]
  );
  const blog_id = rows[0].blog_id; // chatGPT helped me with this bit

  await db.query(`UPDATE comments SET description = $1 WHERE id = $2`, [
    description,
    id,
  ]);
  revalidatePath(`/posts/${blog_id}`);
  redirect(`/posts/${blog_id}`);
};

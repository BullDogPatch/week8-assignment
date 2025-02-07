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

export const deletePost = async (formData) => {
  const id = formData.get('id');
  await db.query(`DELETE FROM blogs WHERE id = $1`, [id]);
  revalidatePath('/posts');
  redirect('/posts');
};

### Reflection

![blogs](<Screenshot 2025-02-09 205525.png>)
![comments](<Screenshot 2025-02-09 205533.png>)
![blog data](<Screenshot 2025-02-09 205543.png>)
![comment data](<Screenshot 2025-02-09 205600.png>)
Sorry I don't have any wireframes this week, I knew what I wanted to do. The style was based around week 7 assignment, I alway create the wireframes to match my finished product, I just didn't have time to make them. However I feel my website looks ok.

I managed to get all the requirement done.
I can remember on Friday saying to Manny that I couldn't think of another way to delete a post without some sort of state and having to use a client component, but he said there is a way and that is to use a form with hidden input, but we would learn that next week, however I found a couple of videos, this one by leerob on Youtube who works for Vercel [leerob server acions](https://www.youtube.com/watch?v=dDpZfOQBMaU&t) and this one by Code with Sloba [delete task](https://www.youtube.com/watch?v=S9rL4_UDLFQ).

I Found the deleting a bit of a hack because to use a `DeleteForm` component and pass the `id` down from the single post page and attach it to a hidden input in the `DeleteForm`, all seemed a little wierd at first.

Not too sure if there was a better way to get the comments for each Post to be rendered as I had to literally make a seperate call to the database while destructuring the `id` from the params and passing that down as argument to `fetchCommentsByPostId(id)`

```
const SinglePostPage = async ({ params }) => {
  const { id } = await params;
  const { rows: postBydId } = await fetchPostById(id);

  const { rows: comments } = await fetchCommentsByPostId(id);
```

I Have put all my actions into there own file, so I could keep components as clean and tidy as possible.

For the stretch goals I found having to populate the inputs from the posts quite tricky, again I feel there must be a better way to do this, as again I had to use params to use as argument in `await fetchPostById(id)` to then pass into `EditPostForm` to then destructure `heading, content, src` from `rows` to then add that as `defaultValue` to the inputs, I just feel like I was making loads of fetch calls.

```
const EditPostForm = async ({ params }) => {
  const { id } = await params;
  const { rows } = await fetchPostById(id);
  const { heading, content, src } = rows[0];
```

Same with editing a comment, however I got really stuck with the sql query and chatGPT had to ficx 2 or 3 lines of code for me, I was a little disappointed to not fix it myself.

```
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
```

I was using the `id` from the `formData` and passing it to update the comment and it was updating every comment in my table, so all posts looked the same, I didn't realise I needed to make another query to get the blog_id, again there is probably a better way to this.

Using Tailwind was fantastic, not having to go back and forth between files, seems more intuitive, I have probably got a lot of overiding and unused styles but it looks ok for now.

I used `nextjs-top-loader` to get progress bar a long the top when navigating pages, just worked out the box, I expected to have to have a `useEffect` somewhere to track location.

I also made a reusable `SubmitButton` so that I could use react's `useFormStatus` hook as I wanted the user to have feedback when submitting a comment or post, it is a client component and it uses the form that is wrapped around it, I did dame for a delete button too.

I feel like I could have somehow reused the Post component to make SinglePostPage but the SinglePostPage has a few more of details on it and different colours and at the time I couldnt figure out how to do it, please let me know if the is a way, I feel it would be having optional props if that is a thing.

Done metadata and dynamic metadata

Look forward to the feeback and what improvements could be made.

MY IMAGES OR ONLY SET UP FOR GETTY IMAGES LIKE THIS
https://media.gettyimages.com/id/2198242368/photo/manchester-england-harry-maguire-of-manchester-united-celebrates-scoring-his-teams-second.jpg?s=612x612&w=0&k=20&c=jQ1trJ3_RPXQzc3CfeMpQ5RR_Puw4gIk6VwZIgz7ZoI=

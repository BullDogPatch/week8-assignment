### Considerations

Requirements

- Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key. ✅
- Display all posts on the page. ✅
- Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key. ✅
- Create a delete button on posts that allows users to delete the post from the database. ✅
- Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. `/posts/:postid`). ✅
- Add a redirect when a user creates a post to redirect them to the posts page. ✅
- Have an option to sort them in ascending or descending order. (only basic asc to desc, like the one in the demo. Hope that is good enough) ✅

Stretch Goals

- Create an edit functionality accessible via `/posts/:id/edit`, which pre-fills a form for post data. Create a working PUT route to update the post in the database. ✅
- Develop an edit comment feature accessible via `/posts/:id/comments/:id/edit`, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.
- Style to a half decent standard.

Extra

- Look into `useFormState` hook from `react`, so I can get feedback as form submitting or deleting a post

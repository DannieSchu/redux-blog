export const ADD_POST = 'ADD_POST';
export const addPost = post => ({
  type: ADD_POST,
  payload: post
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = index => ({
  type: DELETE_POST,
  payload: index
});

// update post (pass it an id and body)

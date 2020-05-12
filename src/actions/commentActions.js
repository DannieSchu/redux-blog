export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (postIndex, comment) => ({
  type: ADD_COMMENT,
  payload: {
    postIndex,
    comment
  }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';

export const deleteComment = (index, postIndex) => ({
  type: DELETE_COMMENT,
  payload: {
    index,
    postIndex
  }
});

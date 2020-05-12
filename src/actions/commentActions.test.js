import { addComment, ADD_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates an ADD_COMMENT action', () => {
    const action = addComment(1, 'some comment here');

    expect(action).toEqual({
      type: ADD_COMMENT,
      payload: {
        postIndex: 1,
        comment: 'some comment here'
      }
    });
  });

  it('creates a DELETE_COMMENT action', () => {
    const action = deleteComment(1, 2);

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: {
        index: 1,
        postIndex: 2
      }
    })
  })
});

import { addComment, ADD_COMMENT } from './commentActions';

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
});

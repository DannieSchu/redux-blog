import { addPost, ADD_POST, deletePost, DELETE_POST, updatePost, UPDATE_POST } from './postActions';

describe('post actions', () => {
  it('creates an ADD_POST action', () => {
    const action = addPost({
      title: 'something clever',
      body: 'q feqfneowi dwq h0gh390vn ifoheqwoi fhs0 hs dvlsd bvdjlguwe9ghewdsv vbvsjkjlge'
    });

    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        title: 'something clever',
        body: 'q feqfneowi dwq h0gh390vn ifoheqwoi fhs0 hs dvlsd bvdjlguwe9ghewdsv vbvsjkjlge'
      }
    });
  });

  it('creates a DELETE_POST action', () => {
    const action = deletePost(8);

    expect(action).toEqual({
      type: DELETE_POST,
      payload: 8
    });
  });

  it('creates an UPDATE_POST action', () => {
    const action = updatePost({
      id: '2tg32',
      body: 'grwh vg00 jno noregr-rsib josbnvs nvldsd 0fijdosj'
    });

    expect(action).toEqual({
      type: UPDATE_POST,
      payload: {
        id: '2tg32',
        body: 'grwh vg00 jno noregr-rsib josbnvs nvldsd 0fijdosj'
      }
    });
  });
});

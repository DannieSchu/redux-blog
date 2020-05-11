import { addPost, ADD_POST } from './postActions';

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
});

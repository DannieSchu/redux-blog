import { addPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('handles the ADD_POST function', () => {
    const state = [];
    const action = addPost({
      title: 'something clever',
      body: 'q feqfneowi dwq h0gh390vn ifoheqwoi fhs0 hs dvlsd bvdjlguwe9ghewdsv vbvsjkjlge'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      title: 'something clever',
      body: 'q feqfneowi dwq h0gh390vn ifoheqwoi fhs0 hs dvlsd bvdjlguwe9ghewdsv vbvsjkjlge'
    }]);
  });

  it('handles the DELETE_POST function', () => {
    const state = [{
      title: 'something clever',
      body: 'q feqfneowi dwq h0gh390vn ifoheqwoi fhs0 hs dvlsd bvdjlguwe9ghewdsv vbvsjkjlge'
    }];
    const action = deletePost(0);

    const newState = reducer(state, action);

    expect(newState).toEqual([]);
  });
});

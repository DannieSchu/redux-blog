import { getPosts } from './postSelectors';

describe('post selectors', () => {
  it('gets a list of posts', () => {
    const state = [
      {
        title: 'some title',
        body: 'fjoeiwjfowe nh093w ejis ndks'
      }
    ];

    const posts = getPosts(state);

    expect(posts).toEqual([
      {
        title: 'some title',
        body: 'fjoeiwjfowe nh093w ejis ndks'
      }
    ]);
  });
});

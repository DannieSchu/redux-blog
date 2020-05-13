import { getPosts, getPostByIndex } from './postSelectors';

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

  it('gets a post by index', () => {
    const state = [
      {
        title: 'some title',
        body: 'fjoeiwjfowe nh093w ejis ndks'
      },
      {
        title: 'some other title',
        body: 'few h9we hih'
      },
      {
        title: 'yet another title',
        body: 'vf neie fww wo fhw0e9 jfidlsn lisfbndaf ejlf'
      }
    ];

    const post = getPostByIndex(state, 2);

    expect(post).toEqual({
      title: 'yet another title',
      body: 'vf neie fww wo fhw0e9 jfidlsn lisfbndaf ejlf'
    });
  });
});

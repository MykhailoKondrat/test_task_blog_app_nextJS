import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { ReactElement, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { fetchPosts, updateStateActionCreator } from '../redux/mainSlice';
import store from '../redux/store';
import Post from '../components/post';
import Hoc from '../components/hoc';
import { MyPost, Posts } from '../interfaces/interfaces';

const HeaderWrapper = styled.div`
     height: 52;
     display: flex;
     background: red;
     justify-content: space-around;
     align-items: center;
     width: 100vw;
     height: 52px;
     top:0;
     left: 0;
     position: fixed;
     z-index: 50;
     background: white;
     box-shadow: 1px 0px 21px -10px rgba(0,0,0,0.42);

    button{
     background: dodgerblue;
     height: 32px;
     border: none;
     border-radius: 12px;
     padding: 8px 12px;
     color:white;
     font-weight: bold;
     text-transform: uppercase;
     :hover{
     background: darkblue;
    cursor:pointer;
     }
    }
`;
const Wrapper = styled.main`
    margin-top: 64px;

`;
const LinkTitle = styled.a`
  text-decoration: none;
  :hover{
  cursor: pointer;
    text-decoration: underline;

  color:blue;
  }
`;
export default function Home(props:Posts): ReactElement {
  const dispatch = useDispatch();
  // on initial load  push page props to Redux state to make it persistent.
  useEffect(() => {
    dispatch(updateStateActionCreator(props.posts));
  }, []);
  // fetching data from Redux store
  const posts:MyPost[] = useSelector((state) => state.mainReducer.posts);

  return (
    <Hoc>
      <Head>
        <title>Kondrat Blog App</title>
      </Head>
      <HeaderWrapper>
        <button
          onClick={() => {
            dispatch(fetchPosts());
          }}
        >
          Refresh
        </button>
        <Link href="/add_post">
          <LinkTitle> + Add Post</LinkTitle>
        </Link>
      </HeaderWrapper>
      <Wrapper>
        <h1>Blog App</h1>
        <section className="postsWrapper">
          {posts
            .slice()
            .reverse()
            .map((post) => <Post key={post.id} title={post.title} id={post.id} />)}
        </section>
      </Wrapper>

      <footer>link to github here</footer>
    </Hoc>
  );
}

// fetch initial lists of posts on server side and return them as index props.
export async function getServerSideProps() {
  const reduxStore = store;
  const { dispatch } = reduxStore;
  const result:any = await dispatch(fetchPosts());
  const posts:MyPost[] = result.payload.data;

  return { props: { posts: [...posts] } };
}

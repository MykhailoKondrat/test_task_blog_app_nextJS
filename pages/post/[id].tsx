import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Hoc from '../../components/hoc';

const LinkTitle = styled.a`
  text-decoration: none;
  :hover{
  cursor: pointer;
  text-decoration: underline;
  color:blue;
  }
`;
export default function Post(props): ReactElement {
  // to get post id
  const router = useRouter();
  const postId = Number(router.query.id);
  const postData:{title:string, body:string} = useSelector((state) => state.mainReducer.posts.find((p) => p.id === postId));

  return (
    <Hoc>
      <Link href="/">
        <LinkTitle> &#60; Back</LinkTitle>
      </Link>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </Hoc>
  );
}

import React, { ReactElement } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 24px;
  border-radius: 12px;
  margin-bottom:12px;
  box-shadow: 1px 0px 21px -10px rgba(0,0,0,0.42);
  box-sizing:border-box;
  :hover{
  background: #f0faff;
  font-weight: bold;

  }
`;
const LinkTitle = styled.a`
  text-decoration: none;
  :hover{
  cursor: pointer;
  
  }
`;

const Post = ({ title, id }): ReactElement => (
  <Wrapper>
    <Link href="/post/[id]" as={`/post/${id}`}><LinkTitle>{title}</LinkTitle></Link>
  </Wrapper>
);

export default Post;

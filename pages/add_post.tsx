import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { submitPost } from '../redux/mainSlice';
import { NewPost } from '../interfaces/interfaces';
import Hoc from '../components/hoc';

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const InputWrapper = styled.label`
  display: block;
`;
const LabelText = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;
const SubmitButton = styled.button`
  height: 48px;
  background: dodgerblue;
  color:white;
  font-weight: bold;
  display: inline;
  border-radius: 16px;
  margin-top: 24px;
  font-size: 20px;
  outline:none;
  border:none;
  :hover{
    background: darkblue;
    cursor:pointer;
  }
  :disabled{
  background: lightblue;
  }
`;
const Input = styled.input`
    height:32px;
    font-size: 16px;
    padding-left: 12px;
    border-radius: 12px;
    outline: none;
    border: 1px solid grey;
`;
const TextArea = styled.textarea`
    font-size: 16px;
    padding-left: 12px;
    padding-top:12px;
    border-radius: 12px;
    outline: none;
    border: 1px solid grey;
`;

const LinkTitle = styled.a`
  text-decoration: none;
  :hover{
  cursor: pointer;
    text-decoration: underline;

  color:blue;
  }
`;
export default function addPost(): ReactElement {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const dispatch = useDispatch();
  const router = useRouter();
  const onInputChageHandler = (event, setStateFunc) => {
    const userInput = event.target.value;
    setStateFunc(userInput);
  };
  const submitPostHandler = (event) => {
    event.preventDefault();
    const data:NewPost = {
      title,
      body,
    };
    dispatch(submitPost(data)).then(() => {
      router.push('/');
    });
  };
  return (
    <Hoc>
      <Link href="/">
        <LinkTitle> &#60; Back</LinkTitle>
      </Link>
      <h1>Add Post</h1>
      <Form onSubmit={(event) => submitPostHandler(event)}>
        <InputWrapper>
          <LabelText>Post Title</LabelText>
          <Input
            type="text"
            id="title"
            onChange={(event) => onInputChageHandler(event, setTitle)}
          />
        </InputWrapper>
        <InputWrapper>
          <LabelText>Enter Text Here</LabelText>
          <TextArea
            id="body"
            onChange={(event) => onInputChageHandler(event, setBody)}
          />
        </InputWrapper>
        <SubmitButton
          type="submit"
          disabled={!(title.length !== 0 && body.length !== 0)}
        >
          Submit
        </SubmitButton>
      </Form>

    </Hoc>
  );
}

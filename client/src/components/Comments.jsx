import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://i.ytimg.com/an_webp/FztSFtwobtM/mqdefault_6s.webp?du=3000&sqp=CKWFr5sG&rs=AOn4CLAMzCAbAKTIX--mtt7cbzIVVoFO6A" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;

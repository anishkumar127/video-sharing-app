import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://avatars.githubusercontent.com/u/77631750?v=4" />
      <Details>
        <Name>
          Anish Kumar <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          aliquam incidunt voluptatem odio iste omnis, earum natus aperiam
          recusandae, quidem id. Illo accusamus magni culpa porro molestiae eos,
          ab quos repellendus quam asperiores dolore veniam atque repudiandae
          voluptatum harum aliquam distinctio consequatur eius. Odio laboriosam
          a et tenetur quas porro.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;

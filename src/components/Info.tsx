import { styled } from "styled-components";

const InfoWrapper = styled.div`
  width: 18rem;
  height: 36rem;
  padding: 3rem 1.6rem;
  position: sticky;
  top: 79.8px;
  background-color: #485276;
  color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Info = () => {
  return (
    <InfoWrapper>
      <h1>Introduce</h1>
      <p>여기에 깃헙이라던가 블로그라던가 연락처 들어감</p>
    </InfoWrapper>
  );
};

export default Info;

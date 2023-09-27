import { styled } from "styled-components";

const InfoWrapper = styled.div`
  width: 18rem;
  height: 36rem;
  padding: 3rem 1.6rem;
  position: sticky;
  top: 2rem;
  background-color: #282c34;
  color: white;
`;

const Info = () => {
  return (
    <InfoWrapper>
      <h1>Introduce</h1>
    </InfoWrapper>
  );
};

export default Info;

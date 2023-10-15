import { styled } from "styled-components";

const Button = styled.div`
  border-radius: 1.5rem;
  background-color: #485276;
  color: white;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const DetailButton = () => {
  return <Button>버튼</Button>;
};

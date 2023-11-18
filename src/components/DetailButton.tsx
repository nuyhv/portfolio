import { styled } from "styled-components";
import MagnifierSVG from "../assets/images/magnifier.svg?react";

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  width: max-content;
  border-radius: 1.5rem;
  background-color: #485276;
  color: white;
  padding: 0.4rem 0.7rem;
  padding-right: 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: #6d779c;
  }
`;

export const DetailButton = () => {
  return (
    <Button>
      <MagnifierSVG width={20} height={20} />
      자세히 보기
    </Button>
  );
};

import { styled } from "styled-components";

const HeaderWarpper = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Header: React.FC = () => {
  return <HeaderWarpper>이건 헤더임</HeaderWarpper>;
};

export default Header;

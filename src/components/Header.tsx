import { styled } from "styled-components";
import { Link } from "react-router-dom";

const HeaderWarpper = styled.header`
  position: sticky;
  top: 0;
  text-align: center;
  color: #282c34;

  @keyframes dropHeader {
    0% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  animation-name: dropHeader;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-duration: 0.75s;
`;

const MenuList = styled.ul`
  display: inline-block;
  padding: 10px;
  background-color: white;
  list-style: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const MenuItem = styled.li`
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: inherit;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWarpper>
      <MenuList>
        <MenuItem>
          <Link to="#about">About Me</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#skills">Skills</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#projects">Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#experience">Experience</Link>
        </MenuItem>
      </MenuList>
    </HeaderWarpper>
  );
};

export default Header;

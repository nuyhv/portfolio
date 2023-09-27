import { styled } from "styled-components";
import { Link } from "react-scroll";

const HeaderWarpper = styled.header`
  position: sticky;
  top: 1rem;
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
  background-color: white;
  list-style: none;
  border-radius: 2rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
`;
const MenuItem = styled.li`
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.07;
    background-color: #282c34;
    border-radius: 10rem;
    color: white;
  }
  a {
    display: block;
    padding: 1rem;
    text-decoration: none;
    color: inherit;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWarpper>
      <MenuList>
        <MenuItem>
          <Link
            to="aboutme" // 해당 컴포넌트의 id와 동일한 이름을 사용
            spy={true}
            smooth={true}
            offset={-70} // 스크롤 위치를 조절할 수 있습니다.
            duration={500}
          >
            About Me
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
            Skills
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            Projects
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="experience" // 해당 컴포넌트의 id와 동일한 이름을 사용
            spy={true}
            smooth={true}
            offset={-70} // 스크롤 위치를 조절할 수 있습니다.
            duration={500}
          >
            Experience
          </Link>
        </MenuItem>
      </MenuList>
    </HeaderWarpper>
  );
};

export default Header;

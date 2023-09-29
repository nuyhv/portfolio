import { styled } from "styled-components";
import { Link } from "react-scroll";

const HeaderWarpper = styled.header`
  position: sticky;
  top: 0;
  padding: 1rem;
  text-align: center;
  color: #485276;
  z-index: 100;

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
  line-height: initial;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 3rem;
  &:hover {
    scale: 1.05;
    background-color: #485276;
    color: white;
  }
  a {
    display: block;
    font-size: 0.9rem;
    padding: 0.9rem;
    text-decoration: none;
    color: inherit;
    @media screen and (max-width: 375px) {
      font-size: 0.8rem;
      padding: 0.8rem;
    }
    &.active {
      transition: all 0.3s ease-in-out;
      background-color: #485276;
      border-radius: 2rem;
      color: white;
    }
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
            offset={-80} // 스크롤 위치를 조절할 수 있습니다.
            duration={500}
            activeClass="active"
          >
            About Me
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            Skills
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            Projects
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            Experience
          </Link>
        </MenuItem>
      </MenuList>
    </HeaderWarpper>
  );
};

export default Header;

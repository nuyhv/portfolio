import * as React from "react";
import { styled } from "styled-components";
import { Link } from "react-scroll";

const HeaderWrapper = styled.header`
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
    font-weight: 500;
    text-decoration: none;
    color: inherit;
    @media screen and (max-width: 375px) {
      font-size: 0.8rem;
      padding: 0.8rem;
    }
  }
  &.active {
    transition: all 0.3s ease-in-out;
    background-color: #485276;
    border-radius: 2rem;
    color: white;
  }
`;

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<string | null>("aboutme");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // const aboutMe = document.getElementById("aboutme");
    const skills = document.getElementById("skills");
    const projects = document.getElementById("projects");
    const experience = document.getElementById("experience");

    if (scrollY < skills!.offsetTop - 80) {
      setActiveSection("aboutme");
    }
    if (scrollY >= skills!.offsetTop - 80 && scrollY < projects!.offsetTop - 80) {
      setActiveSection("skills");
    }
    if (scrollY >= projects!.offsetTop - 80 && scrollY < experience!.offsetTop - 80) {
      setActiveSection("projects");
    }
    // 스크롤이 맨 아래에 도달할때도 experience를 active로 표시하도록 함
    if (
      scrollY >= experience!.offsetTop - 80 ||
      scrollY + window.innerHeight >= document.body.scrollHeight
    ) {
      setActiveSection("experience");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper>
      <MenuList>
        <MenuItem className={activeSection === "aboutme" ? "active" : ""}>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            // activeClass="active"
          >
            <span>About Me</span>
          </Link>
        </MenuItem>
        <MenuItem className={activeSection === "skills" ? "active" : ""}>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            // activeClass="active"
          >
            <span>Skills</span>
          </Link>
        </MenuItem>
        <MenuItem className={activeSection === "projects" ? "active" : ""}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            // activeClass="active"
          >
            <span>Projects</span>
          </Link>
        </MenuItem>
        <MenuItem className={activeSection === "experience" ? "active" : ""}>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            // activeClass="active"
          >
            <span>Experience</span>
          </Link>
        </MenuItem>
      </MenuList>
    </HeaderWrapper>
  );
};

export default Header;

import { styled } from "styled-components";
import Aboutme from "../pages/aboutme/Aboutme";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import Experience from "../pages/experience/Experience";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  max-width: 58rem;
  row-gap: 2rem;
  scroll-behavior: smooth;
  padding-bottom: 80.3px;
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem 3rem 1.5rem;
    width: 100%;
  }
`;

const Contents = () => {
  return (
    <Wrapper>
      <Aboutme />
      <Skills />
      <Projects />
      <Experience />
    </Wrapper>
  );
};

export default Contents;

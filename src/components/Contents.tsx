import { styled } from "styled-components";
import Aboutme from "../pages/aboutme/Aboutme";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import Experience from "../pages/experience/Experience";

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 58rem;
  row-gap: 2rem;
  scroll-behavior: smooth;
  padding-bottom: 80.3px;
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem 3rem 1.5rem;
  }
`;

const Contents = () => {
  return (
    <ContentsWrapper>
      <Aboutme />
      <Skills />
      <Projects />
      <Experience />
    </ContentsWrapper>
  );
};

export default Contents;

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
  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;

type ContentsProps = {
  openModal: () => void;
};
const Contents: React.FC<ContentsProps> = ({ openModal }) => {
  return (
    <Wrapper>
      <Aboutme />
      <Skills />
      <Projects openModal={openModal} />
      <Experience />
    </Wrapper>
  );
};

export default Contents;

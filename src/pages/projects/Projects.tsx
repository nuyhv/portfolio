import { ContentWrapper, Tag } from "../../assets/styles/CommonStyles.tsx";
import styled from "styled-components";
import { projectScripts } from "../../scripts/projects/preview.ts";

const ImgContainer = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-radius: 1rem;
  img {
    object-fit: cover;
    transition: 0.3s ease;
    &:hover {
      scale: 1.03;
    }
  }
`;

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-8">
      {projectScripts.map((project) => (
        <ContentWrapper key={project.id} data-aos="fade-up">
          <h1>Projects</h1>
          <ImgContainer>
            <img src={project.image} alt={project.title} />
          </ImgContainer>
          <h2 className="text-2xl font-semibold py-2">{project.title}</h2>
          <div>
            {project.skills.map((skills) => (
              <Tag key={skills}>{skills}</Tag>
            ))}
          </div>
          <p>{project.subTitle}</p>
        </ContentWrapper>
      ))}
    </section>
  );
};

export default Projects;

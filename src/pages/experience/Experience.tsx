import { ContentWrapper } from "../../assets/styles/CommonStyles.tsx";
import { styled } from "styled-components";
import { expScripts } from "../../scripts/projects/preview.ts";

const Contents = styled.section`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    padding-bottom: 0.4rem;
  }
  li {
    list-style: disc;
    margin-left: 20px;
  }
`;

const Experience = () => {
  return (
    <ContentWrapper id="experience" data-aos="fade-up">
      <h1>Experience</h1>
      {expScripts.map((exp) => (
        <Contents key={exp.id}>
          <div className="w-1/4">
            <h2>{exp.title}</h2>
            <p className="text-sm">{exp.period}</p>
          </div>
          <div className="w-3/5">
            <h2>{exp.subtitle}</h2>
            <ul className="flex flex-col gap-2">
              {exp.desc.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        </Contents>
      ))}
    </ContentWrapper>
  );
};

export default Experience;

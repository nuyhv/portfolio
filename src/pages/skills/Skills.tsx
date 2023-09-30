import * as React from "react";
import { ContentWrapper } from "../../assets/styles/CommonStyles.tsx";
import styled from "styled-components";
import { skillsScripts } from "../../scripts/projects/preview.ts";

const SkillCard = styled.div`
  width: 70px;
  height: 70px;
  padding: 0.5rem;
  border-radius: 25%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
  text-align: center;
  overflow: hidden;
  &:hover {
    scale: 1.03;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25%;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 0.8rem;
  gap: 0.2rem;
`;

const Skills: React.FC = () => {
  return (
    <ContentWrapper id="skills" data-aos="fade-up">
      <h1>Skills</h1>
      <div className="flex flex-wrap gap-4 justify-between">
        {skillsScripts.map((category) => (
          <section key={category.title}>
            <h2 className="text-2xl font-semibold pb-2">{category.title}</h2>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <Skill key={skill.id}>
                  <SkillCard>
                    <img src={skill.img} alt={skill.name} />
                  </SkillCard>
                  <span>{skill.name}</span>
                </Skill>
              ))}
            </div>
          </section>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Skills;

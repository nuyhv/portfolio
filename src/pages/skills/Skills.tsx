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
    scale: 1.05;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25%;
  }
  @media screen and (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 375px) {
    width: 55px;
    height: 55px;
  }
`;

const SkillName = styled.span`
  display: none;
  position: absolute;
  margin-top: 4rem;
  font-weight: 600;
  background-color: black;
  border-radius: 0.5rem;
  color: white;
  padding: 0.2rem 0.5rem;
  z-index: 10;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 0.8rem;
  gap: 0.2rem;
  &:hover {
    ${SkillCard} {
      scale: 1.05;
    }
    ${SkillName} {
      display: block;
    }
  }
  ${SkillName}::before {
    content: "";
    position: absolute;
    top: -0.55rem;
    left: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
    transform: translateX(-50%);
  }
`;

const Skills: React.FC = () => {
  return (
    <ContentWrapper id="skills" data-aos="fade-up">
      <h1>Skills</h1>
      <div className="flex flex-col gap-10">
        {skillsScripts.map((category) => (
          <section key={category.title}>
            <h2 className="text-2xl font-semibold pb-2">{category.title}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Skill key={skill.id}>
                  <SkillCard>
                    <img src={skill.img} alt={skill.name} />
                  </SkillCard>
                  <SkillName>{skill.name}</SkillName>
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

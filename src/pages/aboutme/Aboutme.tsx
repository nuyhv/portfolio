import { ContentWrapper } from "../../assets/styles/CommonStyles.tsx";
import { aboutScripts } from "../../scripts/projects/preview.ts";
import { styled } from "styled-components";

const Introduce = styled.ul`
  padding-top: 1rem;
`;

const Profile = styled.div`
  min-width: 250px;
  max-width: 500px;
  height: 300px;
  border-radius: 1rem;
  background-color: gray;
  overflow: hidden;
`;

const Contents = styled.div`
  display: flex;
  font-size: 1.2rem;
  line-height: 1.5;
  gap: 1.5rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .highlight {
    font-weight: 700;
    background-clip: border-box;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Aboutme = () => {
  return (
    <ContentWrapper id="aboutme">
      <h1>About me</h1>
      <Contents>
        <Profile>dd</Profile>
        <div>
          <h2>{aboutScripts.title}</h2>
          <Introduce>
            {aboutScripts.desc.map((desc) => (
              <li className="pb-4">{desc}</li>
            ))}
          </Introduce>
        </div>
      </Contents>
    </ContentWrapper>
  );
};

export default Aboutme;

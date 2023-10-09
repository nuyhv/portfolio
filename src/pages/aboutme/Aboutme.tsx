import { ContentWrapper } from "../../assets/styles/CommonStyles.tsx";
import { aboutScripts } from "../../scripts/projects/preview.ts";
import { styled } from "styled-components";

const Introduce = styled.ul`
  padding-top: 1rem;
  li {
    padding-bottom: 1rem;
  }
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
    background-clip: inherit;
    background: linear-gradient(to right, #8894b3, #3c4f6f);
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
            <li>
              코드를 <span className="highlight">개선</span>하는 것을{" "}
              <span className="highlight">주저하지 않고</span> 바로 실행에 옮깁니다.
            </li>
            <li>
              <span className="highlight">사용자 경험</span>을 높이기 위해서 의견을 주고받고
              반영하는 것을 좋아합니다.
            </li>
            <li>
              문제를 해결하기 위해 포기하지 않고 <span className="highlight">집요하게</span>{" "}
              파고듭니다.
            </li>
          </Introduce>
        </div>
      </Contents>
    </ContentWrapper>
  );
};

export default Aboutme;

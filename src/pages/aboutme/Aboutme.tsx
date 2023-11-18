import images from "../../assets/images/images.ts";
import { ContentWrapper } from "../../assets/styles/commonStyles.ts";
import { aboutScripts } from "../../scripts/projects/preview.ts";
import { styled } from "styled-components";

const Introduce = styled.div`
  ul {
    padding-top: 1rem;
  }
  li {
    padding-bottom: 1rem;
  }
`;

const Profile = styled.div`
  flex-shrink: 0;
  width: 250px;
  height: 300px;
  border-radius: 1rem;
  background-color: gray;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 765px) {
    flex: auto;
    max-width: 100%;
    height: 250px;
  }
`;

const Contents = styled.div`
  display: flex;
  font-size: 1.15rem;
  line-height: 1.5;
  gap: 1.5rem;
  .highlight {
    font-weight: 600;
    background-clip: inherit;
    background: linear-gradient(45deg, #3c4f6f, #5e90cd, #3c4f6f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (max-width: 765px) {
    flex-direction: column;
  }
`;

const Aboutme = () => {
  return (
    <ContentWrapper id="aboutme">
      <h1>About me</h1>
      <Contents>
        <Profile>
          <img src={images.profile} alt="Profile" />
        </Profile>
        <Introduce>
          <div className="text-[1.4rem] font-medium">
            {aboutScripts.title.map((title) => (
              <p key={title}>{title}</p>
            ))}
          </div>
          <ul>
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
            <li>
              서로의 <span className="highlight">경험을 공유</span>하는 것을 좋아하여,{" "}
              <span className="highlight">개발자를 위한 개발자</span>가 되는것이 목표입니다.
            </li>
          </ul>
        </Introduce>
      </Contents>
    </ContentWrapper>
  );
};

export default Aboutme;

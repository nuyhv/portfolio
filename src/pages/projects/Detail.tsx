import { Modal, ModalOverlay, CloseButton } from "../../components/Modal";
import { styled } from "styled-components";
import { bbangorderDevText } from "../../scripts/projects/bbangorder";
import { myportfolioDevText } from "../../scripts/projects/myportfolio";
import { stackoverflowDevText } from "../../scripts/projects/stackoverflow";

type DetailProps = {
  onClose: () => void;
  route: string;
};

const DetailModal = styled(Modal)`
  width: 90vw;
  height: 90vh;
  max-width: 55rem;
  max-height: 100rem;
  border-radius: 1rem;
  overflow: overlay;
`;

const ModalWrapper = styled.div`
  position: absolute;
`;

const Description = styled.section`
  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }
  h2::before {
    content: "⭐️";
    margin-right: 10px;
  }
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }
  li {
    list-style-type: disc;
    margin-left: 20px;
  }
`;

export const Detail: React.FC<DetailProps> = ({ onClose, route }) => {
  let projectData = null;

  if (route === "/bbangorder") {
    projectData = bbangorderDevText;
  } else if (route === "/stackoverflow") {
    projectData = stackoverflowDevText;
  } else if (route === "/myportfolio") {
    projectData = myportfolioDevText;
  }

  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} />
      <DetailModal>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Description>
          {`현재 ${route}의 내용을 담고 있음`}
          {projectData && (
            <>
              <h2>개발 내용</h2>
              <div className="flex flex-col gap-4">
                {projectData.map((dev) => (
                  <div key={dev.id}>
                    <h3>{dev.title}</h3>
                    <ul className="flex flex-col gap-2">
                      {dev.desc.map((desc) => (
                        <li key={desc}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
          <h2>문제 해결 경험</h2>
          <h2>성장 경험</h2>
        </Description>
      </DetailModal>
    </ModalWrapper>
  );
};

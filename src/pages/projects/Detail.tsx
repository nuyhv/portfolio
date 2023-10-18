import { Modal, ModalOverlay, CloseButton } from "../../components/Modal";
import { styled } from "styled-components";

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
`;

const ModalWrapper = styled.div`
  position: absolute;
`;

const Description = styled.section``;

export const Detail: React.FC<DetailProps> = ({ onClose, route }) => {
  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} />
      <DetailModal>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Description>{`현재 ${route}의 내용을 담고 있음`}</Description>
      </DetailModal>
    </ModalWrapper>
  );
};

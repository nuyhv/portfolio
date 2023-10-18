import { Modal, ModalOverlay, CloseButton } from "../../components/Modal";
import { styled } from "styled-components";

type DetailProps = {
  onClose: () => void;
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

export const Detail: React.FC<DetailProps> = ({ onClose }) => {
  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} />
      <DetailModal>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Description>내용</Description>
      </DetailModal>
    </ModalWrapper>
  );
};

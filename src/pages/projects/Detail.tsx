import { Modal, ModalOverlay, CloseButton } from "../../components/Modal";
import { styled } from "styled-components";

type DetailProps = {
  onClose: () => void;
};

const ModalWrapper = styled.div`
  position: absolute;
`;

export const Detail: React.FC<DetailProps> = ({ onClose }) => {
  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} />
      <Modal>
        <CloseButton onClick={onClose}>x</CloseButton>
        <div>내용</div>
      </Modal>
    </ModalWrapper>
  );
};

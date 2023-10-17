import { styled, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  background-color: white;
  padding: 50px;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 15px;
  background: none;
  border: none;
  font-size: 4em;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2000;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

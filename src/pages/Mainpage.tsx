import * as React from "react";
import Info from "../components/Info";
import Contents from "../components/Contents";
import { styled } from "styled-components";
import { Detail } from "./projects/Detail";

const MainpageWrapper = styled.main`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem 0 1rem;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 1250px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Mainpage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <MainpageWrapper>
      <Info />
      <Contents openModal={openModal} />
      {isModalOpen ? <Detail onClose={closeModal} /> : null}
    </MainpageWrapper>
  );
};

export default Mainpage;

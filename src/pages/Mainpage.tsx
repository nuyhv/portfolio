import Info from "../components/Info";
import Contents from "../components/Contents";
import { styled } from "styled-components";

const MainpageWrapper = styled.main`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  padding: 0 1rem 0 1rem;
  height: 100%;
  width: 100%;
`;

const Mainpage = () => {
  return (
    <MainpageWrapper>
      <Info />
      <Contents />
    </MainpageWrapper>
  );
};

export default Mainpage;

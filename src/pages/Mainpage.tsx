import Info from "../components/Info";
import Contents from "../components/Contents";
import { styled } from "styled-components";

const MainpageWrapper = styled.section`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  padding: 0 1rem 17rem 1rem;
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

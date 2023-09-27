import Info from "../components/Info";
import Contents from "../components/Contents";
import { styled } from "styled-components";

const MainpageWrapper = styled.section`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  padding-bottom: 17rem;
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

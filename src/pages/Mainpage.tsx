import Info from "../components/Info";
import Contents from "../components/Contents";
import { styled } from "styled-components";

const MainpageWrapper = styled.section`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  margin: 2rem 0;
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

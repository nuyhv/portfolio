import { styled } from "styled-components";
import images from "../images/images";

export const ContentWrapper = styled.section`
  width: 100%;
  min-height: 36rem;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
  background-color: white;
  overflow: hidden;
  h1 {
    position: relative;
    left: -48px;
    padding-left: 48px;
    margin-bottom: 2.5rem;
    background-image: url(${images.ribbon});
    background-repeat: no-repeat;
    background-size: 18rem;
    background-position: -48px;
    color: white;
  }
`;

export const Tag = styled.span`
  display: inline-block;
  min-width: max-content;
  padding: 0.2rem 0.5rem;
  border-radius: 1.5rem;
  border: 2px solid #485276;
  color: #485276;
  font-size: 0.8rem;
  font-weight: 600;
`;

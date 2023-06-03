import styled, { keyframes } from "styled-components";
const fadeInAndScale = keyframes`
  0% {
    opacity: 0;
    scale: 0;
    transform:  translate(106px);
   
  }
  
  100% {

    opacity: 1;
    transform:  translatey(0);
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export const Banner = styled.div`
  position: relative;
  width: 85%;
  height: 12rem;
  margin: 4.4rem auto 6.2rem 44px;
  display: flex;
  align-items: center;
  justify-content: end;
  border-radius: 5px;
  background-image: ${({ theme }) => theme.COLORS.GRADIENT["200"]};
  color: ${({ theme }) => theme.COLORS.LIGHT["300"]};


  > img {
    position: absolute;
    width: 19.1rem;
    height: 14.9rem;
    bottom: 0;
    left: -3rem;
  }
  > div {
    width: 55%;
    text-align: initial;
    
    opacity: 0;
    transform: scale(0) translatey(225px);
    animation: ${fadeInAndScale} 2s ease-in-out forwards;
  }
  h3 {
    font-weight: bold;
    line-height: 140%;
    font-size: clamp(1.4rem, 1.7rem, 2rem);
  }
  p {
    font-weight: thin;
    line-height: 140%;
    font-size: 1.2rem;
  }
`;

import styled, { keyframes } from "styled-components";

const fadeInAndScale = keyframes`
  0% {
    opacity: 0.5;
    scale: 0;
    transform: translateY(125px);
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
  max-width: 1120px;
  width: 85%;
  height: 12rem;
  margin: 4.4rem 1.6rem 6.2rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: end;

  border-radius: 5px;
  background-image: ${({ theme }) => theme.COLORS.GRADIENT["200"]};
  color: ${({ theme }) => theme.COLORS.LIGHT["300"]};

  .imgDesketop {
    display: none;
  }

  .imgMobile {
    width: 50%;
    height: 120%;

    display: block;
  }

  > img {
    position: absolute;
    bottom: 0;
    left: -3rem;

    width: 19.1rem;
    height: 14.9rem;
  }

  > div {
    width: 55%;
    margin-right: 8px;

    text-align: initial;
    opacity: 0;

    transform: scale(0) translatey(225px);
    animation: ${fadeInAndScale} 1.5s linear forwards;
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
  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    width: 90%;
    max-width: 1120px;
    height: 21rem;
    margin-top: 12.4rem;

    > div {
      text-align: center;
    }

    .imgMobile {
      display: none;
    }

    .imgDesketop {
      width: 50%;
      height: 150%;
      display: block;
    }

    h3 {
      font-size: 4.1rem;
    }
    p {
      font-size: 1.6rem;
      font-weight: 300;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow-y: auto;
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 90%;

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  width: 31.6rem;
  margin: 0 auto;

  display: flex;
  gap: 24px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .uploadIcon {
    margin: 0 8px 0 32px;
  }

  .labelImg {
    background-color: transparent;
    position: absolute;
    width: 250px;
    top: 46%;
    height: 35px;
    z-index: 99;
    gap: 8px;
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  > h1 {
    display: none;
    font-size: 3.2rem;
    margin-bottom: 3.2rem;
  }

  > a {
    text-decoration: none;
  }

  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    width: 44.4rem;

    > h1 {
      display: block;
    }
  }
`;

export const Fildset = styled.div`
  width: 31.6rem;
  display: flex;
  gap: 16px;
  flex-direction: column;

  > label,
  .labelImgPlate {
    width: 100%;

    font-weight: 400;
    text-align: start;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT["400"]};
    font-family: ${({ theme }) => theme.FONTS.TITLE} ;
  }

  @media (min-width: 767px) {
  }
`;

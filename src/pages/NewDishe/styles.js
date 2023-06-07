import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow-y: auto;
`;

export const Content = styled.main`
  max-width: 1120px;
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;

  .Ingredients {
    border-radius: 5px;
    padding: 12px;
    background-color: ${({ theme }) => theme.COLORS.DARK["900"]};

    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const TextTop = styled.div`
  max-width: 1120px;
  width: 90%;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.FONTS.TEXT};

  > svg {
    width: 15px;
    height: 23px;
  }

  > span {
    font-size: 12px;
    font-weight: 700;
  }

  > h3 {
    font-size: 2.3rem;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  gap: 24px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  p.price {
    position: absolute;
    z-index: 12;
    left: 12px;
    bottom: 15px;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
  }

  .priceInput {
    font-weight: 400;
    font-size: 16px;
    padding-left: 35px;
    color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
  }

  .priceInput::-webkit-inner-spin-button,
  .priceInput::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .uploadIcon {
    margin: 0 8px 0 32px;
  }

  .labelImg {
    cursor: pointer;
    position: absolute;
    z-index: 99;
    bottom: -8px;
    left: 120px;

    width: 250px;
    height: 35px;
    margin-left: 16px;

    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
    transform: translateX(-50%) translateY(-50%);
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
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

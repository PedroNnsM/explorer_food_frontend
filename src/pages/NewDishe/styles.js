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

    display: inline-flex;
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
  cursor: default;

  > svg {
    cursor: pointer;
    width: 15px;
    height: 23px;
  }

  > span {
    cursor: pointer;
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
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 0.4fr 1.9fr 0.5fr 0.3fr 1.3fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 0.5fr;
    grid-template-areas:
      "IMAGE TITLE TITLE CATEGORY CATEGORY CATEGORY"
      "INGREDIENTS INGREDIENTS INGREDIENTS INGREDIENTS PRICE PRICE"
      "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION"
      ". . . . . BUTTON";
    gap: 24px;

    section:nth-child(1) {
      grid-area: IMAGE;
    }
    section:nth-child(2) {
      grid-area: TITLE;
    }
    section:nth-child(3) {
      grid-area: CATEGORY;
    }
    section:nth-child(4) {
      grid-area: INGREDIENTS;
    }
    section:nth-child(5) {
      grid-area: PRICE;
    }
    section:nth-child(6) {
      grid-area: DESCRIPTION;
    }
    button {
      grid-area: BUTTON;
    }
    > h1 {
      display: block;
    }
  }
  @media (min-width: ${({ theme }) => theme.SIZE.LARGE}) {
    grid-template-columns: 1.1fr 0.9fr 1.9fr 0.5fr 0.3fr 1.3fr;
  }
`;

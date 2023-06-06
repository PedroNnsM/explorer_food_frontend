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
  height: 100vh;

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
    bottom: 24px;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
  }

  .priceInput {
    font-weight: 400;
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
    top: 45px;

    width: 250px;
    height: 35px;
    margin-left: 16px;

    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;

    background-color: transparent;
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

// export const Section = styled.div`
//   position: relative;
//   width: 100%;

//   display: flex;
//   gap: 16px;
//   flex-direction: column;

//   > label,
//   .labelImgPlate {
//     width: 100%;

//     text-align: start;
//     font-weight: 400;
//     font-size: 1.6rem;
//     font-family: ${({ theme }) => theme.FONTS.TITLE};
//     color: ${({ theme }) => theme.COLORS.LIGHT["400"]};
//   }

//   .labelImgPlate {
//     cursor: pointer;
//   }

//   > select {
//     position: relative;
//     cursor: pointer;
//     padding: 13px 16px;
//     height: 56px;

//     border-radius: 5px;
//     background-color: ${({ theme }) => theme.COLORS.DARK["900"]};
//     border: none;

//     font-size: 14px;
//     font-weight: 400;

//     color: ${({ theme }) => theme.COLORS.LIGHT["400"]};

//     appearance: none;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     -ms-appearance: none;
//     -o-appearance: none;

//     &:focus-visible {
//       outline: none;
//     }
//   }

//   > select option {
//     color: ${({theme}) => theme.COLORS.LIGHT['300']};
//     background-color: ${({theme}) => theme.COLORS.DARK['900']};
//     font-size: 16px;
//     outline: none;
//   }

//   > select +  svg {
//     position: absolute;
//     right: 16px;
//     top: 55px;
//   }

//   @media (min-width: 767px) {
//   }
// `;

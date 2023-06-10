import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  gap: 16px;
  flex-direction: column;

  > label,
  .labelImgPlate {
    width: 100%;

    text-align: start;
    font-weight: 400;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.LIGHT["400"]};
  }

  .labelImgPlate {
    cursor: pointer;
  }

  > select {
    position: relative;
    cursor: pointer;
    padding: 13px 16px;
    height: 56px;

    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK["900"]};
    border: none;

    font-size: 14px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.LIGHT["400"]};

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;

    &:focus-visible {
      outline: none;
    }
  }

  > select option {
    color: ${({theme}) => theme.COLORS.LIGHT['300']};
    background-color: ${({theme}) => theme.COLORS.DARK['900']};
    font-size: 16px;
    outline: none;
  }

  > select +  svg {
    position: absolute;
    right: 16px;
    top: 55px;
  }

  @media (min-width: 767px) {
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
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
  gap: 3.2rem;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

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
    padding: 64px;

    background-color: ${({ theme }) => theme.COLORS.DARK["700"]};

    > h1 {
      display: block;
    }
  }
`;

export const Fildset = styled.div`
  width: 31.6rem;
  display: flex;

  flex-direction: column;

  > label {
    width: 100%;
    padding: 1rem;

    text-align: start;
    font-size: 1.6rem;
  }

  @media (min-width: 767px) {
    width: 34.8rem;
  }
`;

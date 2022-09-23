import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.COLORS.BLACK_500};
  background-color: rgba(0, 0, 0, 0.9);

  button {
    border: none;
    background: none;
    margin: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    font-size: 1.5rem;
  }
`;

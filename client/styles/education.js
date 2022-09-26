import styled from 'styled-components';

export const Main = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BLACK_600};
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EducationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  color: ${({ theme }) => theme.COLORS.WHITE_500};
  font-size: 1.2rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
  }
`;

import styled from 'styled-components';

export const Container = styled.nav`
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  width: 100%;
  display: flex;
  justify-content: center;

  gap: 2rem;

  position: fixed;
  bottom: 0;
  z-index: 1;
`;

export const Tooltip = styled.nav`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE_500};

  position: absolute;
  bottom: 5rem;
`;

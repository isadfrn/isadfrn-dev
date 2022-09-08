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

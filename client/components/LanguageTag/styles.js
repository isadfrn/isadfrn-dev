import styled from 'styled-components';

export const Container = styled.div`
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  background-color: ${({ theme }) => theme.COLORS.BLACK_500};
  color: ${({ theme }) => theme.COLORS.WHITE_500};
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;

  &:hover {
    cursor: pointer;
  }
`;

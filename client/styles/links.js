import styled from 'styled-components';

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE_500};
  font-family: ${({ theme }) => theme.FONTS.MAIN};
`;

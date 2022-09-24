import styled from 'styled-components';

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  color: ${({ theme }) => theme.COLORS.WHITE_500};
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  font-size: 1.2rem;
  font-weight: 400;
`;

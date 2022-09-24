import styled from 'styled-components';

export const CvContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LangContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  font-weight: 500;
  font-size: 1.4rem;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

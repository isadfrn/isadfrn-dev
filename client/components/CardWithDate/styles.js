import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  width: 9rem;
  text-align: justify;
  position: absolute;
  display: flex;
  flex-direction: column;

  &.left {
    margin-left: -10rem;
  }

  &.right {
    margin-left: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    width: 25rem;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    &.left {
      margin-left: -26rem;
    }

    &.right {
      margin-left: 2rem;
    }
  }
`;

export const Date = styled.span`
  font-size: 2rem;
`;

export const Description = styled.span`
  font-size: 1rem;
  text-align: justify;
`;

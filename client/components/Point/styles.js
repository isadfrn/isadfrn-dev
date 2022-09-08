import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin: 2rem 0;
`;

export const Line = styled.div`
  width: 2rem;
  position: absolute;
  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_500};

  &.left {
    bottom: 2.4rem;
    right: 0.5rem;
  }

  &.right {
    bottom: 2.4rem;
    right: -1.2rem;
  }
`;

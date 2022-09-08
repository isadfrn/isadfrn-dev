import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BLACK_600};
  width: 100%;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
`;

export const Line = styled.div`
  width: 0.01rem;
  height: 300rem;
  border: 0.01rem dashed ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const DateWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.position}rem;

  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    top: ${(props) => props.position}rem;
  }
`;

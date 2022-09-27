import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE_500};
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  width: 100%;
`;

export const Background = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE_500};
  height: 4rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1rem;
`;

export const Paragraph = styled.p`
  padding: 1rem;
  color: ${({ theme }) => theme.COLORS.BLACK_500};
`;

export const TagArea = styled.div`
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

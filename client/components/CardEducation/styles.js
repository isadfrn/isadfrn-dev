import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.BLACK_500};
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;

export const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

export const Date = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
`;

export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

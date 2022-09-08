import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  width: 22rem;
  text-align: justify;
  position: absolute;
`;

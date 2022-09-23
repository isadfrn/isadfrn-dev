import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BLACK_600};
  background-image: url(${(props) => props.image.src});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
`;

export const Main = styled.main`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  word-wrap: break-word;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE_500};
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  font-weight: 300;
  font-size: 1.2rem;
  padding: 1rem 0;
`;

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  font-weight: 500;
  font-size: 1rem;
`;

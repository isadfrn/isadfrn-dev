import { Container } from '../styles/error';
import { Main, TitleContainer, Title, Subtitle } from '../styles/index';

export default function Custom500() {
  return (
    <Container>
      <Main>
        <TitleContainer>
          <Title>500</Title>
          <Subtitle>Internal server error</Subtitle>
        </TitleContainer>
      </Main>
    </Container>
  );
}

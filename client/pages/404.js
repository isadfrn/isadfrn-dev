import { Container } from '../styles/400';
import { Main, TitleContainer, Title, Subtitle } from '../styles/index';

export default function Custom404() {
  return (
    <Container>
      <Main>
        <TitleContainer>
          <Title>400</Title>
          <Subtitle>Page not found</Subtitle>
        </TitleContainer>
      </Main>
    </Container>
  );
}

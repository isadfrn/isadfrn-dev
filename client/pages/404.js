import Head from 'next/head';

import { Container } from '../styles/error';
import { Main, TitleContainer, Title, Subtitle } from '../styles/index';

export default function Custom404() {
  return (
    <Container>
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <Main>
        <TitleContainer>
          <Title>400</Title>
          <Subtitle>Page not found</Subtitle>
        </TitleContainer>
      </Main>
    </Container>
  );
}

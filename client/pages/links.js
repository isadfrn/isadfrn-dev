import Head from 'next/head';

import { Container } from '../styles/error';
import { Main, TitleContainer } from '../styles/index';
import { Title } from '../styles/construction';

export default function Links() {
  return (
    <Container>
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <Main>
        <TitleContainer>
          <Title>This page is under construction</Title>
        </TitleContainer>
      </Main>
    </Container>
  );
}

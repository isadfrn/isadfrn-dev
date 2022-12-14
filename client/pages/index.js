import Head from 'next/head';

import background from '../assets/img/background.svg';

import { Container, Main, TitleContainer, Title, Subtitle } from '../styles/index';

export default function Landing() {
  return (
    <Container image={background}>
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <Main>
        <TitleContainer>
          <Title>Hey There! I&apos;m Isabella Nunes</Title>
          <Subtitle>and I&apos;m a Software Engineer</Subtitle>
        </TitleContainer>
      </Main>
    </Container>
  );
}

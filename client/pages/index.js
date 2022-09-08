import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import background from '../assets/img/main-background.svg';
import arrow from '../assets/img/arrow-down.svg';
import { Container, Main, TitleContainer, Title, Subtitle, Start } from '../styles/index';

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
        <Link href="/about">
          <Start>
            <Image src={arrow} alt="An arrow pointing down" />
          </Start>
        </Link>
      </Main>
    </Container>
  );
}

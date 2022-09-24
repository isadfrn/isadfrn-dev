import Head from 'next/head';

import { Container } from '../styles/error';
import { Main, TitleContainer } from '../styles/index';
import { Title } from '../styles/construction';
import { LangContainer, CvContainer } from '../styles/cv';

export default function Cv() {
  return (
    <Container>
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <Main>
        <CvContainer>
          <TitleContainer>
            <Title>Download my CV</Title>
          </TitleContainer>
          <LangContainer>
            <a href="https://github.com/isadfrn/curriculum/raw/main/isabella-nunes-cv-en.pdf">EN</a>
            <a href="https://github.com/isadfrn/curriculum/raw/main/isabella-nunes-cv-pt.pdf">PT</a>
          </LangContainer>
        </CvContainer>
      </Main>
    </Container>
  );
}

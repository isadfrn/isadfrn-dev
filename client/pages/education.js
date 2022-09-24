import Head from 'next/head';

import { Container } from '../styles/error';
import { Main, TitleContainer } from '../styles/index';
import { Title } from '../styles/construction';
import { EducationContainer } from '../styles/education';

export default function Education() {
  return (
    <Container>
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <Main>
        <EducationContainer>
          <TitleContainer>
            <Title>Education</Title>
          </TitleContainer>

          <TitleContainer>
            <Title>Courses</Title>
          </TitleContainer>

          <TitleContainer>
            <Title>Books</Title>
          </TitleContainer>

          <TitleContainer>
            <Title>Articles</Title>
          </TitleContainer>

          <TitleContainer>
            <Title>Events</Title>
          </TitleContainer>
        </EducationContainer>
      </Main>
    </Container>
  );
}

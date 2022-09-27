import Head from 'next/head';

import { CardProject } from '../components/CardProject';

import { ProjectsContainer, Main, Title } from '../styles/projects';
import { Container } from '../styles/error';

export default function Projects() {
  return (
    <Container>
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <Main>
        <Title>Projects</Title>
        <ProjectsContainer>
          <CardProject
            url="https://github.com/isadfrn/training-focus"
            title="Training Focus"
            description="A timer with ambient sounds for helping with focus. Has dark and light themes, and can act like a Pomodoro Timer"
            tags={[{ name: 'JavaScript' }]}
          />
          <CardProject
            url="https://github.com/isadfrn/notes-manager"
            title="Notes manager"
            description="Full-stack application for managing notes and classifying them with tags"
            tags={[
              { name: 'JavaScript' },
              { name: 'Node.js' },
              { name: 'React.js' },
              { name: 'Knex.js' },
              { name: 'styled-components' },
              { name: 'SQLite' },
            ]}
          />
          <CardProject
            url="https://github.com/isadfrn/training-focus"
            title="Git Bookmarks"
            description="A page for keeping a list of favorites GitHub accounts under the browser's local storage"
            tags={[{ name: 'JavaScript' }]}
          />
        </ProjectsContainer>
      </Main>
    </Container>
  );
}

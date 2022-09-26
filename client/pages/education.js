import Head from 'next/head';

import ufg from '../assets/img/ufg.png';
import utfpr from '../assets/img/utfpr.png';
import rocketseat from '../assets/img/rocketseat.png';

import { CardEducation } from '../components/CardEducation';

import { Container } from '../styles/error';
import { Main, EducationContainer, Title } from '../styles/education';

export default function Education() {
  return (
    <Container>
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <Main>
        <Title>Education</Title>
        <EducationContainer>
          <CardEducation
            url="https://www.inf.ufg.br/"
            title="Postgraduate degree"
            institution="Federal University of Technology - Parana"
            image={utfpr}
            width={80}
            height={25}
            name="Java"
            start="2022"
            end="2023"
          />
          <CardEducation
            url="http://pos-graduacao-ead.cp.utfpr.edu.br/java/"
            title="Bachelor's degree"
            institution="Federal University of Goiás"
            image={ufg}
            width={60}
            height={80}
            name="Computer Science"
            start="2014"
            end="2018"
          />
        </EducationContainer>

        <Title>Courses</Title>
        <EducationContainer>
          <CardEducation
            url="https://github.com/isadfrn/curriculum/blob/main/assets/docs/2020/gostack.pdf"
            title="Go Stack 13"
            hours="160"
            tags={[
              { name: 'JavaScript' },
              { name: 'TypeScript' },
              { name: 'React.js' },
              { name: 'Node.js' },
            ]}
            institution="Rocketseat"
            image={rocketseat}
            width={80}
            height={80}
            start="2020"
            end="2020"
          />
        </EducationContainer>
      </Main>
    </Container>
  );
}

import Head from 'next/head';

import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import youtube from '../assets/icons/youtube.svg';

import { Container } from '../styles/error';
import { Main, TitleContainer } from '../styles/index';
import { Title } from '../styles/construction';
import { LinksContainer, IconsContainer } from '../styles/links';

import { LinkWithIcon } from '../components/LinkWithIcon';

export default function Links() {
  return (
    <Container>
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <Main>
        <LinksContainer>
          <TitleContainer>
            <Title>Connect with me</Title>
          </TitleContainer>
          <IconsContainer>
            <LinkWithIcon icon={github} title="GitHub" url="https://github.com/isadfrn" />
            <LinkWithIcon
              icon={instagram}
              title="Instagram"
              url="https://www.instagram.com/isadfrn/"
            />
            <LinkWithIcon
              icon={linkedin}
              title="LinkedIn"
              url="https://www.linkedin.com/in/isadfrn/"
            />
            <LinkWithIcon icon={twitter} title="Twitter" url="https://twitter.com/isadfrn" />
            <LinkWithIcon
              icon={youtube}
              title="YouTube"
              url="https://www.youtube.com/channel/UCgCWh9ELWp38Yu1PTU6rcSA"
            />
          </IconsContainer>
        </LinksContainer>
      </Main>
    </Container>
  );
}

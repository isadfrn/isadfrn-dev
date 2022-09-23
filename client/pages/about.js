import Head from 'next/head';

import photo from '../assets/icons/photo.svg';
import link from '../assets/icons/link.svg';

import start from '../assets/img/start.jpg';
import nintendo01 from '../assets/img/nintendo01.jpg';
import csbc from '../assets/img/csbc.jpg';
import senac from '../assets/img/senac.jpg';
import graduation from '../assets/img/graduation.jpg';
import married from '../assets/img/married.jpg';
import remotely from '../assets/img/remotely.jpg';
import state from '../assets/img/state.jpg';
import teach from '../assets/img/teach.jpg';
import nintendo02 from '../assets/img/nintendo02.jpg';

import { useState } from 'react';

import { Card } from '../components/Card';
import { Point } from '../components/Point';
import { CardWithDate } from '../components/CardWithDate';
import { CardWithIcon } from '../components/CardWithIcon';
import { ImageModal } from '../components/ImageModal';

import { Container, TimelineContainer, Line, Wrapper } from '../styles/about';

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const [imageToRender, setImageToRender] = useState();

  function handleOpenModal(image) {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
      setImageToRender(image);
    }
  }

  return (
    <Container>
      {showModal && <ImageModal imageToShow={imageToRender} openCloseFunction={handleOpenModal} />}
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <TimelineContainer>
        <Line />

        <Card
          text="Hey there! If you're here, you probably want to know more about me right? Well, let's
          start from the beggining, shall we?"
        />

        <Wrapper position={12}>
          <CardWithDate side="left" year="1993" text="Where everything started" />
          <Point side="left" />
        </Wrapper>
        <Wrapper position={13.5} onClick={() => handleOpenModal(start)}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={14}>
          <CardWithDate side="right" year="2001" text="Played my first ever video game" />
          <Point side="right" />
        </Wrapper>
        <Wrapper position={15.5} onClick={() => handleOpenModal(nintendo01)}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={26}>
          <Point side="left" />
          <CardWithDate
            side="left"
            year="2004"
            text="Bought my first computer with 256 MB RAM, 40 GB of disk, a Intel Celeron D 315, and Windows XP Starter Edition"
          />
        </Wrapper>

        <Wrapper position={28}>
          <Point side="right" />
          <CardWithDate side="right" year="2011" text="Started graduation in Physics" />
        </Wrapper>

        <Wrapper position={40}>
          <Point side="left" />
          <CardWithDate side="left" year="2012" text="Used Linux for the first time" />
        </Wrapper>

        <Wrapper position={42}>
          <Point side="right" />
          <CardWithDate
            side="right"
            year="2013"
            text="In order to run some computer simulations I had to learn Fortran and C"
          />
        </Wrapper>

        <Wrapper position={52}>
          <Point side="left" />
          <CardWithDate side="left" year="2014" text="Started graduation in Computer Science" />
        </Wrapper>

        <Wrapper position={54}>
          <Point side="right" />
          <CardWithDate side="right" year="2014" text="Got my first Full-stack job" />
        </Wrapper>

        <Wrapper position={64}>
          <Point side="left" />
          <CardWithDate
            side="left"
            year="2015"
            text="Published my first article in a national event"
          />
        </Wrapper>
        <Wrapper position={65.5} onClick={() => handleOpenModal(csbc)}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={68}>
          <Point side="right" />
          <CardWithDate
            side="right"
            year="2015"
            text="Got my first job as a coding instructor at Senac the main agent of professional education in Brazil"
          />
        </Wrapper>
        <Wrapper position={69.5} onClick={() => handleOpenModal(senac)}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={76}>
          <Point side="left" />
          <CardWithDate
            side="left"
            year="2016"
            text="Published my first article in a international event"
          />
        </Wrapper>
        <Wrapper position={77.5}>
          <CardWithIcon image={link} />
        </Wrapper>

        <Wrapper position={82}>
          <Point side="right" />
          <CardWithDate side="right" year="2018" text="Graduated in Computer Science" />
        </Wrapper>
        <Wrapper position={83.5} onClick={() => handleOpenModal(graduation)}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={88}>
          <Point side="left" />
          <CardWithDate side="left" year="2020" text="I married the love of my life" />
        </Wrapper>
        <Wrapper position={89.5} onClick={() => handleOpenModal(married)}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={92}>
          <Point side="right" />
          <CardWithDate side="right" year="2021" text="Started to work remotely" />
        </Wrapper>
        <Wrapper position={93.5} onClick={() => handleOpenModal(remotely)}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={98}>
          <Point side="left" />
          <CardWithDate side="left" year="2021" text="Moved to Santa Catarina state" />
        </Wrapper>
        <Wrapper position={99.5} onClick={() => handleOpenModal(state)}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={104}>
          <Point side="right" />
          <CardWithDate side="right" year="2021" text="Started to teach code remotly" />
        </Wrapper>
        <Wrapper position={105.5} onClick={() => handleOpenModal(teach)}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={110}>
          <Point side="left" />
          <CardWithDate side="left" year="2022" text="Some old habits don't change" />
        </Wrapper>
        <Wrapper position={111.5} onClick={() => handleOpenModal(nintendo02)}>
          <CardWithIcon image={photo} />
        </Wrapper>
      </TimelineContainer>
    </Container>
  );
}

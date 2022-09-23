import Head from 'next/head';

import photo from '../assets/img/photo.svg';
import link from '../assets/img/link.svg';
import start from '../assets/img/start.jpg';

import { useState } from 'react';

import { Card } from '../components/Card';
import { Point } from '../components/Point';
import { CardWithDate } from '../components/CardWithDate';
import { CardWithIcon } from '../components/CardWithIcon';
import { ImageModal } from '../components/ImageModal';

import { Container, TimelineContainer, Line, Wrapper } from '../styles/about';

export default function Main() {
  const [openModal, setOpenModal] = useState(false);

  function handleImageModal(image) {
    return <ImageModal photo={image} closeFunction={handleOpenCloseImageModal} />;
  }

  function handleOpenCloseImageModal(image) {
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
      handleImageModal(image);
    }
  }

  return (
    <Container>
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <TimelineContainer>
        {openModal}
        <Line />

        <Card
          text="Hey there! If you're here, you probably want to know more about me right? Well, let's
          start from the beggining, shall we?"
        />

        <Wrapper position={12}>
          <CardWithDate side="left" year="1993" text="Where everything started" />
          <Point side="left" />
        </Wrapper>

        <Wrapper position={14}>
          <CardWithDate side="right" year="2000" text="Played my first ever video game" />
          <Point side="right" />
        </Wrapper>

        <Wrapper position={15.5} onClick={handleOpenCloseImageModal(start)}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={25}>
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

        <Wrapper position={38}>
          <Point side="left" />
          <CardWithDate side="left" year="2012" text="Used Linux for the first time" />
        </Wrapper>

        <Wrapper position={41}>
          <Point side="right" />
          <CardWithDate
            side="right"
            year="2013"
            text="In order to run some computer simulations I had to learn Fortran and C"
          />
        </Wrapper>

        <Wrapper position={48}>
          <Point side="left" />
          <CardWithDate side="left" year="2014" text="Started graduation in Computer Science" />
        </Wrapper>

        <Wrapper position={52}>
          <Point side="right" />
          <CardWithDate side="right" year="2014" text="Got my first Full-stack job" />
        </Wrapper>

        <Wrapper position={58}>
          <Point side="left" />
          <CardWithDate
            side="left"
            year="2015"
            text="Published my first article in a national event"
          />
        </Wrapper>

        <Wrapper position={59.5}>
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

        <Wrapper position={69.5}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={70}>
          <Point side="left" />
          <CardWithDate
            side="left"
            year="2017"
            text="Published my first article in a national event"
          />
        </Wrapper>

        <Wrapper position={71.5}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={82}>
          <Point side="right" />
          <CardWithDate
            side="right"
            year="2018"
            text="Published my first article in a internatinoal event"
          />
        </Wrapper>

        <Wrapper position={83.5}>
          <CardWithIcon image={link} />
        </Wrapper>

        <Wrapper position={84}>
          <Point side="left" />
          <CardWithDate side="left" year="2018" text="Graduated in Computer Science" />
        </Wrapper>

        <Wrapper position={85.5}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={94}>
          <Point side="right" />
          <CardWithDate side="right" year="2021" text="Moved to Santa Catarina state" />
        </Wrapper>

        <Wrapper position={95.5}>
          <CardWithIcon image={photo} />
        </Wrapper>

        <Wrapper position={96}>
          <Point side="left" />
          <CardWithDate side="left" year="2022" text="Some old habits don't change" />
        </Wrapper>

        <Wrapper position={97.5}>
          <CardWithIcon image={photo} />
        </Wrapper>
      </TimelineContainer>
    </Container>
  );
}

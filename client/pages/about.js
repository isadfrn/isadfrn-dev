import Head from 'next/head';
import photo from '../assets/img/photo.svg';
import attach from '../assets/img/attach.svg';
import link from '../assets/img/link.svg';
import { Card } from '../components/Card';
import { Point } from '../components/Point';
import { CardWithDate } from '../components/CardWithDate';
import { CardWithIcon } from '../components/CardWithIcon';
import { Container, TimelineContainer, Line, DateWrapper } from '../styles/about';

export default function Main() {
  return (
    <Container>
      <Head>
        <title>Isabella Nunes | Software Engineer</title>
      </Head>
      <TimelineContainer>
        <Line />

        <Card
          text="Hey there! If you're here, you probably want to know more about me right? Well, let's
          start from the beggining, shall we?"
        />

        <DateWrapper position={12}>
          <CardWithDate side="left" year="1993" text="Where everything started" />
          <Point side="left" />
        </DateWrapper>

        <DateWrapper position={14}>
          <CardWithDate side="right" year="2000" text="Played my first ever video game" />
          <Point side="right" />
        </DateWrapper>

        <DateWrapper position={15.5}>
          <CardWithIcon image={photo} />
        </DateWrapper>

        <DateWrapper position={25}>
          <Point side="left" />
          <CardWithDate
            side="left"
            year="2004"
            text="Bought my first computer with 256 MB RAM, 40 GB of disk, a Intel Celeron D 315, and Windows XP Starter Edition"
          />
        </DateWrapper>

        <DateWrapper position={28}>
          <Point side="right" />
          <CardWithDate side="right" year="2011" text="Started graduation in Physics" />
        </DateWrapper>

        <DateWrapper position={38}>
          <Point side="left" />
          <CardWithDate side="left" year="2012" text="Used Linux for the first time" />
        </DateWrapper>

        <DateWrapper position={41}>
          <Point side="right" />
          <CardWithDate
            side="right"
            year="2013"
            text="In order to run some computer simulations I had to learn Fortran and C"
          />
        </DateWrapper>

        <DateWrapper position={48}>
          <Point side="left" />
          <CardWithDate side="left" year="2014" text="Started graduation in Computer Science" />
        </DateWrapper>

        <DateWrapper position={52}>
          <Point side="right" />
          <CardWithDate side="right" year="2014" text="Got my first Full-stack job" />
        </DateWrapper>

        <DateWrapper position={58}>
          <Point side="left" />
          <CardWithDate
            side="left"
            year="2015"
            text="Published my first article in a national event"
          />
        </DateWrapper>

        <DateWrapper position={59.5}>
          <CardWithIcon image={photo} />
        </DateWrapper>

        <DateWrapper position={68}>
          <Point side="right" />
          <CardWithDate
            side="right"
            year="2015"
            text="Got my first job as a coding instructor at Senac the main agent of professional education in Brazil"
          />
        </DateWrapper>

        <DateWrapper position={69.5}>
          <CardWithIcon image={photo} />
        </DateWrapper>

        <DateWrapper position={70}>
          <Point side="left" />
          <CardWithDate
            side="left"
            year="2017"
            text="Published my first article in a national event"
          />
        </DateWrapper>

        <DateWrapper position={71.5}>
          <CardWithIcon image={photo} />
        </DateWrapper>

        <DateWrapper position={82}>
          <Point side="right" />
          <CardWithDate
            side="right"
            year="2018"
            text="Published my first article in a internatinoal event"
          />
        </DateWrapper>

        <DateWrapper position={83.5}>
          <CardWithIcon image={link} />
        </DateWrapper>

        <DateWrapper position={84}>
          <Point side="left" />
          <CardWithDate side="left" year="2018" text="Graduated in Computer Science" />
        </DateWrapper>

        <DateWrapper position={85.5}>
          <CardWithIcon image={photo} />
        </DateWrapper>

        <DateWrapper position={94}>
          <Point side="right" />
          <CardWithDate side="right" year="2021" text="Moved to Santa Catarina state" />
        </DateWrapper>

        <DateWrapper position={95.5}>
          <CardWithIcon image={photo} />
        </DateWrapper>

        <DateWrapper position={96}>
          <Point side="left" />
          <CardWithDate side="left" year="2022" text="Some old habits don't change" />
        </DateWrapper>

        <DateWrapper position={97.5}>
          <CardWithIcon image={photo} />
        </DateWrapper>
      </TimelineContainer>
    </Container>
  );
}

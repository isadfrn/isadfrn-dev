import Head from 'next/head';
import { Card } from '../components/Card';
import { Point } from '../components/Point';
import { CardWithDate } from '../components/CardWithDate';
import { CardWithImage } from '../components/CardWithImage';
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
          start from the begging, shall we?"
        />
        <DateWrapper position={12}>
          <CardWithDate side="left" year="1993" text="Where everything started" />
          <Point side="left" />
        </DateWrapper>

        <DateWrapper position={13.5}>
          <CardWithImage />
        </DateWrapper>

        <DateWrapper position={20}>
          <Point side="right" />
          <CardWithDate
            side="right"
            year="2004"
            text="Bought my first computer with 256 MB RAM, 40 GB of disk, a Intel Celeron D 315, and Windows XP Starter Edition"
          />
        </DateWrapper>

        <DateWrapper position={24}>
          <Point side="left" />
          <CardWithDate side="left" year="2011" text="Started graduation in Physics" />
        </DateWrapper>

        <DateWrapper position={37}>
          <Point side="right" />
          <CardWithDate
            side="right"
            year="2012"
            text="In order to run some computer simulations I had to learn Fortran and C, I fell in love with programming that year"
          />
        </DateWrapper>

        <DateWrapper position={40}>
          <Point side="left" />
          <CardWithDate side="left" year="2014" text="Started graduation in Computer Science" />
        </DateWrapper>

        <DateWrapper position={45}>
          <Point side="left" />
          <CardWithDate side="left" year="2016" text="Publish graduation in Computer Science" />
        </DateWrapper>

        <DateWrapper position={54}>
          <Point side="right" />
          <CardWithDate side="right" year="2018" text="I graduated in Computer Science" />
        </DateWrapper>

        <DateWrapper position={55.5}>
          <CardWithImage />
        </DateWrapper>
      </TimelineContainer>
    </Container>
  );
}

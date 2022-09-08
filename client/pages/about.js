import { Menu } from '../components/Menu';
import { Card } from '../components/Card';
import { Point } from '../components/Point';
import { CardWithDate } from '../components/CardWithDate';
import { Container, TimelineContainer, Line, DateWrapper } from '../styles/about';

export default function Main() {
  return (
    <Container>
      <Menu />
      <TimelineContainer>
        <Line />
        <Card
          text="Hey there! If you're here, you probably want to know more about me right? Well, let's
          start from the begging, shall we?"
        />
        <DateWrapper position={12}>
          <CardWithDate side="left" year="1993" text="Where everything starts" />
          <Point side="left" />
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
            year="2013"
            text="In order to run some computer simulations I had to learn Fortran and C, I fell in love with programming "
          />
        </DateWrapper>

        <DateWrapper position={40}>
          <Point side="left" />
          <CardWithDate side="left" year="2014" text="Started graduation in Computer Science" />
        </DateWrapper>

        <DateWrapper position={50}>
          <Point side="right" />
          <CardWithDate side="right" year="2014" text="Started graduation in Computer Science" />
        </DateWrapper>
      </TimelineContainer>
    </Container>
  );
}

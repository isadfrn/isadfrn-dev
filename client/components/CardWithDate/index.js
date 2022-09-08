import { Container, Date, Description } from './styles';

export function CardWithDate({ side, year, text }) {
  return (
    <Container className={side === 'left' ? 'left' : 'right'}>
      <Date>{year}</Date>
      <Description>{text}</Description>
    </Container>
  );
}

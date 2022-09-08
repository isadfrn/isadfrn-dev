import { Container, Line } from './styles';

export function Point({ side }) {
  return (
    <Container>
      <Line className={side === 'left' ? 'left' : 'right'} />
    </Container>
  );
}

import { Container } from './styles';

export function ImageModal({ closeFunction }) {
  return (
    <Container>
      <button onClick={closeFunction}>X</button>
    </Container>
  );
}

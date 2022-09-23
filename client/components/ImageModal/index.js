import Image from 'next/image';

import { Container } from './styles';

export function ImageModal({ closeFunction, photo }) {
  return (
    <Container>
      <button onClick={closeFunction}>X</button>

      <Image src={photo} alt="An image from a historical moment" />
    </Container>
  );
}

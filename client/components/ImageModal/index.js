import Image from 'next/image';

import { Container } from './styles';

export function ImageModal({ openCloseFunction, imageToShow }) {
  return (
    <Container>
      <button onClick={openCloseFunction}>X</button>
      <Image src={imageToShow} alt="An image on timeline" />
    </Container>
  );
}

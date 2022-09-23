import Image from 'next/image';

import { Container } from './styles';

export function CardWithIcon({ image }) {
  return (
    <Container>
      <Image src={image} alt="An image here" />
    </Container>
  );
}

import Image from 'next/image';
import { Container } from './styles';
import { useState } from 'react';

export function CardWithIcon({ image }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Image src={image} alt="An image here" />
    </Container>
  );
}

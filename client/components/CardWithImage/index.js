import photo from '../../assets/img/photo.svg';
import Image from 'next/image';
import { Container } from './styles';
import { useState } from 'react';

export function CardWithImage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Image src={photo} alt="An image here" />
    </Container>
  );
}

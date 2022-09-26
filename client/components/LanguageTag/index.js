import Image from 'next/image';

import { Container } from './styles';

export function LanguageTag({ title, image }) {
  return (
    <Container>
      <span>{title}</span>
      <Image src={image} />
    </Container>
  );
}

import Image from 'next/image';

import { LanguageTag } from '../LanguageTag';
import { Container, LogoArea, TextArea, Title, Date, TagArea } from './styles';

export function CardEducation({
  url,
  title,
  hours,
  tags,
  institution,
  image,
  width,
  height,
  name,
  start,
  end,
}) {
  return (
    <a href={url}>
      <Container>
        <LogoArea>
          <Image src={image} alt={name} width={width} height={height} />
        </LogoArea>
        <TextArea>
          <Title>{title}</Title>
          {hours && <span>{hours} hours training</span>}
          <span>{name}</span>
          <span>{institution}</span>
          <Date>
            {start} - {end}
          </Date>
          {tags && (
            <TagArea>
              {tags.map((item) => (
                <LanguageTag key={item.name} title={item.name} image={item.image} />
              ))}
            </TagArea>
          )}
        </TextArea>
      </Container>
    </a>
  );
}

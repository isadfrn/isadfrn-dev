import { LanguageTag } from '../../components/LanguageTag';
import { Container, Background, Title, Paragraph, TagArea } from './styles';

export function CardProject({ url, title, description, tags }) {
  return (
    <Container>
      <a href={url}>
        <Background>
          <Title>{title}</Title>
        </Background>
        <Paragraph>{description}</Paragraph>
        {tags && (
          <TagArea>
            {tags.map((item) => (
              <LanguageTag key={item.name} title={item.name} />
            ))}
          </TagArea>
        )}
      </a>
    </Container>
  );
}

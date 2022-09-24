import { Container, Name, Icon } from './styles';

export function LinkWithIcon({ icon, title, url }) {
  return (
    <Container href={url}>
      <Icon src={icon} alt={title} />
      <Name>{title}</Name>
    </Container>
  );
}

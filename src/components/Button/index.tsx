import { Container, Title, AddIconButton } from './styles';

type Props = {
  title: string;
  showIconAddButton?: boolean
}

export function Button({title, showIconAddButton}: Props) {
  return (
    <Container>
      {
        showIconAddButton && 
        <AddIconButton />
      }
      <Title>
        {title}
      </Title>
    </Container>
  )
}
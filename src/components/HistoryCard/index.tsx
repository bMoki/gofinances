import { Amount, Container, Title } from "./styles";

interface Props {
  title: string;
  amount: string;
  color: string;
}

export function HistoryCard({ amount, color, title }: Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}

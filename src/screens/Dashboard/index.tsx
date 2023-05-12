import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserContainer,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      amount: "R$ 12.000,00",
      title: "Site",
      date: "13/04/2004",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
    },
    {
      id: "2",
      type: "negative",
      amount: "R$ 20,00",
      title: "Aluguel",
      date: "13/04/2004",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
    },
  ];

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/bmoki.png" }} />
            <User>
              <UserGreeting>Ola</UserGreeting>
              <UserName>Breno</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserContainer>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saidas"
          amount="17.400,00"
          lastTransaction="Ultima saida dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="17.400,00"
          lastTransaction="01 a 13 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}

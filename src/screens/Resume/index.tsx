import AsyncStorage from "@react-native-async-storage/async-storage";
import { HistoryCard } from "../../components/HistoryCard";
import { Container, Content, Header, Title } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { TransactionCardProps } from "../../components/TransactionCard";
import { categories } from "../../utils/categories";

interface CategoryData {
  key: string;
  name: string;
  total: string;
  color: string;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );

  async function loadData() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const expenses: TransactionCardProps[] = transactions.filter(
      (expense: TransactionCardProps) => expense.type === "negative"
    );

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expenses.forEach((expense) => {
        if (expense.category === category.key) {
          categorySum += Number(expense.amount);
        }
      });
      if (categorySum > 0) {
        const total = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        totalByCategory.push({
          name: category.name,
          total,
          color: category.color,
          key: category.key,
        });
      }
    });
    setTotalByCategories(totalByCategory);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <Content>
        {totalByCategories.map((item) => (
          <HistoryCard
            key={item.key}
            amount={item.total}
            title={item.name}
            color={item.color}
          />
        ))}
      </Content>
    </Container>
  );
}

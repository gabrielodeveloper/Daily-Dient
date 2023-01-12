import { MealCard } from "@components/MealCard";
import { Container, Date } from "./styles";

export function MealsList() {
  return (
    <Container>
      <Date>
        12.08.22
      </Date>

      <MealCard />
      <MealCard />
      <MealCard />
      <MealCard />
    </Container>
  )
}
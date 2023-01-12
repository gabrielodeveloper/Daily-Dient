import { Avatar, Container, Header, LogoImg, Title } from "./styles";

import { PercentageCard } from "@components/PercentageCard";
import { MealsList } from "@components/MealsList";
import { Button } from "@components/Button";

import avatarImg from '@assets/ellipse.png';
import logoImg from '@assets/logo.png';

export function Home() {
  return (
    <Container>
      <Header>
        <LogoImg source={logoImg}/>

        <Avatar source={avatarImg} />
      </Header>

      <PercentageCard />

      <Title>
        Refeições
      </Title>
      <Button showIconAddButton title="Nova refeição" />

      <MealsList />
    </Container>
  
  );
}

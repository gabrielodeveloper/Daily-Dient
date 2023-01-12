import { Avatar, Container, Header, LogoImg, Title } from "./styles";

import { PercentageCard } from "@components/PercentageCard";

import avatarImg from '@assets/ellipse.png';
import logoImg from '@assets/logo.png';
import { Button } from "@components/Button";

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
    </Container>
  
  );
}

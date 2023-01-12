import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Percentage, Title } from "./styles";



export function PercentageCard({...rest }: TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Percentage>
        90,86%
      </Percentage>
      <Title>
        das refeições dentro da dieta
      </Title>
    </Container>
  )
}
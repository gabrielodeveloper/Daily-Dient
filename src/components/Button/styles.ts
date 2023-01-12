import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  text-align: center;
  margin-left: 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;

export const AddIconButton = styled(Plus).attrs(({ theme}) => ({
  size: 18,
  color: theme.COLORS.WHITE
}))``;
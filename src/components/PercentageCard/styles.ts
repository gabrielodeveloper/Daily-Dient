import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 102px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LINGHT};
  border-radius: 8px;

  position: relative;
  padding: 20px;
  
  margin-bottom: 40px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 32 
}))`
  position: absolute;
  top: 13px;
  right: 13px;
`;

export const Percentage = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BG}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;


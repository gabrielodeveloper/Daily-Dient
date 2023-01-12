import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-bottom: 32px;
`;

export const Date = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
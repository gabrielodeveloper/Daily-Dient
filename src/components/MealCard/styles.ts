import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;

  padding: 16px 12px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  align-items: center;
  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
     font-family: ${theme.FONT_FAMILY.BOLD};
     color: ${theme.COLORS.GRAY_700};
     font-size: 12px;
  `};
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 12px;

  ${({ theme }) => css`
     font-family: ${theme.FONT_FAMILY.REGULAR};
     color: ${theme.COLORS.GRAY_700};
     font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const Circle = styled.View`
  width: 14px;
  height: 14px;

  border-radius: 7px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LINGHT};
`;
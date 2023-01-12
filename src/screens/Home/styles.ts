import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  margin-bottom: 32px;
`;

export const LogoImg = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_700};
  `};
`;
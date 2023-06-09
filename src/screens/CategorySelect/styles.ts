import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: ${RFValue(112)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Category = styled(TouchableOpacity)<CategoryProps>`
  width: 100%;
  padding: ${RFValue(16)}px;
  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary_light : theme.colors.background};
`;
export const Icon = styled(Feather)`
  margin-right: 16px;
  font-size: ${RFValue(20)}px;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;

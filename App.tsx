import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
      >
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

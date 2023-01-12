import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_700Bold, NunitoSans_400Regular } from '@expo-google-fonts/nunito-sans';

import { Loading } from "@components/Loading";
import { Home } from "@screens/Home";

import theme from "./src/theme";
import { StatusBar } from "react-native";

export default function App() {
  const [loadedFonts] = useFonts({
    NunitoSans_700Bold,
    NunitoSans_400Regular
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {loadedFonts ? <Home /> : <Loading /> }
    </ThemeProvider>
  );
}

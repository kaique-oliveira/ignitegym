import { Text, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <View>
      {fontLoaded ? (
        <Text>Open up App.js to start working on your app!</Text>
      ) : (
        <View></View>
      )}
    </View>
  );
}

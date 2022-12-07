import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold
} from '@expo-google-fonts/lato'
import Loading from 'expo-app-loading'
import { Text, View } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  })

  if (!fontsLoaded) return <Loading />

  return (
    <View>
      <Text>Carregou as fontes</Text>
    </View>
  )
}

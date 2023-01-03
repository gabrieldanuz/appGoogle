import React from 'react'
import { Text, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import imgWelcome from '../assets/welcome.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import fonts from '../styles/fonts'
import colors from '../styles/colors'

export function Welcome() {
  const navigation = useNavigation()

  function handleHome() {
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={imgWelcome} resizeMode="contain" style={styles.image} />

      <Text style={styles.welcomeMsg}>
        Encontre os Recursos Google para sua formação.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleHome}>
        <Feather name="feather" style={styles.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 25
  },
  image: {
    height: Dimensions.get('window').height * 0.2
  },
  welcomeMsg: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.text
  },
  button: {
    backgroundColor: colors.primary_blue,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.white,
    marginBottom: 10,
    borderRadius: 16,
    height: 56,
    width: 92
  },
  icon: {
    fontSize: 24,
    color: colors.white
  }
})

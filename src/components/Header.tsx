import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Header(props: { name: string; category: string; image: any }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.category}>{props.category}</Text>
      </View>
      <Image style={styles.image} source={props.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20
  },
  name: {
    fontSize: 28,
    color: colors.heading,
    fontFamily: fonts.text
  },
  category: {
    fontSize: 28,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 40
  },
  image: {
    height: 70,
    width: 70,
    paddingLeft: 10,
    borderRadius: 35
  }
})

import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Header } from '../components/Header'
import { Load } from '../components/Load'

export function Home() {
  const [load, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  })

  if (load) return <Load />

  return (
    <View>
      <Header
        name="Olá"
        category="Educador(a)"
        image={require('../assets/teacher_avatar.png')}
      />
    </View>
  )
}

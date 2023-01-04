import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
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
      <Text>Home</Text>
    </View>
  )
}

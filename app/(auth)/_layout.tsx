import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthScreensLayout = () => {
  return (
   <Stack>
    <Stack.Screen name='login' options={{ headerShown: false }} />
    <Stack.Screen name='signup' options={{ headerShown: false }} />
   </Stack> 
  )
}

export default AuthScreensLayout

const styles = StyleSheet.create({})
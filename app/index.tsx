import { View, Text, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedSafeAreaView } from '@/components/ThemeSafeAreaView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import logo from '@/assets/images/logo-transp.png';
import { router } from 'expo-router';
import ThemedButton from '@/components/ThemedButton'
import { StatusBar } from 'expo-status-bar'

const OnboardingScreen = () => {
  return (
    <ThemedSafeAreaView className='h-full'>
    <ScrollView contentContainerStyle={{ height: '100%'}}>
      <ThemedView className='items-center justify-center px-4 w-full min-h-[85vh] gap-10'>
        <Image source={logo} className='w-[300px] h-[300px] bg-white rounded-full' resizeMode='contain' />

        <ThemedButton className='w-full' title='Login' handlePress={() => router.push('/login')} />
        <ThemedButton className='w-full' title='Sign Up' handlePress={() => router.push('/')} />
      </ThemedView>
    </ScrollView>
    </ThemedSafeAreaView>
  )
}

export default OnboardingScreen
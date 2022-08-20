import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import TopHeader from '../components/component/TopHeader'
import LogInForm from '../components/logIn/LogInForm'

const LogInScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white',}}>
    <ScrollView>
    <TopHeader navigation={navigation}/>
    <LogInForm navigation={navigation}/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default LogInScreen
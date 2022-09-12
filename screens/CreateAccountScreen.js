import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CreateAccountForm from '../components/createAccount/CreateAccountForm'
import TopHeader from '../components/component/TopHeader'

const MOVI_LOGO = '../assets/logo.png'

const CreateAccountScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
    <ScrollView>
    <TopHeader navigation={navigation} logo={require(MOVI_LOGO)}/>
     <CreateAccountForm navigation={navigation}/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default CreateAccountScreen
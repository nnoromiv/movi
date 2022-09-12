import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import TopHeader from '../../components/component/TopHeader'
import ChoiceChips from '../../components/accountSetUpChooseInterest/ChoiceChips'
import { PrimaryButton } from '../../components/component/Exports'

const AccountSetUpChooseInterest = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
        <TopHeader navigation={navigation} Header={'Choose Your Interest'} />
        <Text style={styles.text} >
            Choose your Interest and get the best movie
            recommendations. Don't worry, you can 
            always change it later.
        </Text>
        <ChoiceChips />
        <View style={{ flexDirection: 'row', 
        justifyContent: 'space-around', marginHorizontal: 25, 
        marginBottom: 30}}>
        <PrimaryButton buttonStyle={styles.buttonSkip} buttonText='Skip'/>
        <PrimaryButton buttonStyle={styles.buttonContinue} 
        buttonText='Continue'
        buttonFunc={() => navigation.push('AccountSetUpProfile')}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    text: {
        color: '#212121',
        position: 'absolute',
        top: 50,
        marginHorizontal: 10,
        fontSize: 18,
        letterSpacing: 0.2,
        textAlign: 'left',
        lineHeight: 25,
        fontWeight: '600',
        fontFamily: 'Urbanist-Medium',
    },
    buttonSkip: {
        color: '#007aff',
        width: 170,
        height: 58,
        backgroundColor: '#b0d6ff',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 100,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.2,
        marginRight: 30
    },
    buttonContinue: {
        color: 'white',
        width: 170,
        height: 58,
        backgroundColor: '#007aff',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 100,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.2,
    },
})

export default AccountSetUpChooseInterest
import { View, Text, SafeAreaView, Image, } from 'react-native'
import React from 'react'
import Divider from 'react-native-divider'
import { Icon, icons, letYouInStyles } from '../components/component/Exports'

const LetYouInScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white',}}>
        <Icon imgStyle={letYouInStyles.icons} imgUrl={icons[0].imageUrl} press={() => navigation.goBack()}/>
        <Image source={require('../assets/svg_let_you_in.png')} style={letYouInStyles.svgIcon}/>
        <Text style={letYouInStyles.headerText}> Let's you in</Text>
        <Icon imgStyle={letYouInStyles.connectLogo} imgUrl={icons[1].imageUrl} 
        containerStyle={letYouInStyles.containerStyle} textName={icons[1].name} textStyle={letYouInStyles.textStyle}/>
        <Icon imgStyle={letYouInStyles.connectLogo} imgUrl={icons[2].imageUrl} 
        containerStyle={letYouInStyles.containerStyle} textName={icons[2].name} textStyle={letYouInStyles.textStyle}/>
        <Icon imgStyle={letYouInStyles.connectLogo} imgUrl={icons[3].imageUrl} 
        containerStyle={letYouInStyles.containerStyle} textName={icons[3].name} textStyle={letYouInStyles.textStyle}/>
        <Divider orientation='center' color='#000000' borderColor='#d3d3d3'>or</Divider>
        <Icon textName={'Sign in with password'} textStyle={letYouInStyles.passwordSignIn} press={() => navigation.push('LogInScreen')}/>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, textAlign: 'center',}}>
        <Icon textName={"Don't have an account?"} />
        <Icon textName={' Sign Up'} textStyle={letYouInStyles.signUp} press={() => navigation.push('CreateAccountScreen')}/>
        </View>
    </SafeAreaView>
  )
}

export default LetYouInScreen
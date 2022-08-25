import { SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import TopHeader from '../../components/component/TopHeader'
import { Icon, icons } from '../../components/component/Exports'
import AccountSetUpProfileForm from '../../components/accountSetUpProfile/AccountSetUpProfileForm'

const PLACEHOLDER_IMG = 'https://img.icons8.com/fluency-systems-regular/384/000000/guest-male.png'

const AccountSetUpProfile = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
    <ScrollView>
    <TopHeader navigation={navigation} Header='Fill Your Profile' />
    <Image source={{ uri: PLACEHOLDER_IMG }} 
    style={[styles.profile, {position: 'absolute', marginTop: 50}]}/>
    <Icon imgUrl={icons[4].imageUrl} imgStyle={styles.svgIcon} containerStyle={styles.containerStyle}/>
    <AccountSetUpProfileForm navigation={navigation} />
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    svgIcon : {
        width: 20,
        height: 20,
        alignSelf: 'center'
    },
    profile : {
        width: 200,
        height: 200,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 100
    },
    containerStyle: {
        width: 35,
        height: 35,
        backgroundColor: '#007aff',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: -40,
        marginRight: -150,
        flexDirection: 'row',
        justifyContent: 'center'
    },
})

export default AccountSetUpProfile
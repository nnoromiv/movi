import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

export const PrimaryButton = ({ buttonStyle, buttonFunc, buttonText, disabled, buttonImgUrl, buttonImgStyle}) => (
    <TouchableOpacity disabled={disabled} onPress={buttonFunc}>
    <Image source={{uri: buttonImgUrl}} style={buttonImgStyle}/>
      <Text style={buttonStyle}> {buttonText}
    </Text>
    </TouchableOpacity>
)

export const icons = [
    {
        id: 0,
        name: 'Go back',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/64/000000/long-arrow-left.png'
    },
    {
        id: 1,
        name: 'Connect with Facebook',
        imageUrl: 'https://img.icons8.com/fluency/48/000000/facebook-new.png'
    },
    {
        id: 2,
        name: 'Connect with Google',
        imageUrl: 'https://img.icons8.com/color/48/000000/google-logo.png'
    },
    {
        id: 3,
        name: 'Connect with Apple',
        imageUrl: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png'
    },
    {
        id: 4,
        name: 'Edit icon',
        imageUrl: 'https://img.icons8.com/material/24/ffffff/edit--v1.png'
    },
    {
        id: 5,
        name: 'Search icon',
        imageUrl: 'https://img.icons8.com/ios-glyphs/60/ffffff/search--v1.png',
        activeUrl: 'https://img.icons8.com/ios-glyphs/60/000000/search--v1.png'
    },
    {
        id: 6,
        name: 'Notification icon',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/appointment-reminders--v1.png'
    },
    {
        id:7,
        name: 'Play',
        imageUrl: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/play.png'
    },
    {
        id:8,
        name: 'List',
        imageUrl: 'https://img.icons8.com/sf-black-filled/64/d3d3d3/list.png',
        inactiveUrl: 'https://img.icons8.com/sf-black-filled/64/ffffff/list.png'
    },
    {
        id:9,
        name: 'Filter',
        imageUrl: 'https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/007aff/external-sliders-ux-and-ui-flatart-icons-solid-flatarticons.png',
    },

]

export const Icon = ({ imgStyle, imgUrl, containerStyle, textName, textStyle, press }) => (
    <TouchableOpacity style={containerStyle} onPress={press}>
        <Image style={imgStyle} source={{ uri: imgUrl}} />
        <Text style={textStyle}>{textName}</Text>
    </TouchableOpacity>
)


export const letYouInStyles = StyleSheet.create ({
    icons: {
        width: 20,
        height: 20,
        marginHorizontal: 20,
        marginTop: 12,
        marginBottom: -20
    },
    search: {
        width: 20,
        height: 20,
        marginHorizontal: 60,
        marginTop: 12,
        marginBottom: -20,
        zIndex: 2
    },
    svgIcon : {
        width: 308,
        height: 201,
        alignSelf: 'center',
    },
    headerText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 50,
        textAlign: 'center',
        marginTop: 20
    },
    connectLogo: {
        width: 30,
        height: 30,
        marginTop: -5,
        marginLeft: 30
    },
    containerStyle: {
        width: 350,
        height: 58,
        backgroundColor: 'transparent',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    textStyle: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: -28
    },
    passwordSignIn: {
        color: 'white',
        width: 350,
        height: 58,
        backgroundColor: '#007aff',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 100,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.2
    },
    signUp: {
        color: '#007aff',
        fontWeight: '600'
    }
})

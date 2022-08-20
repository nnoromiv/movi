import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

export const PrimaryButton = ({ buttonStyle, buttonFunc, buttonText, disabled}) => (
    <TouchableOpacity disabled={disabled}>
      <Text style={buttonStyle}
        onPress={buttonFunc}
        > {buttonText}
    </Text>
    </TouchableOpacity>
)

export const icons = [
    {
        name: 'Go back',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/64/000000/long-arrow-left.png'
    },
    {
        name: 'Connect with Facebook',
        imageUrl: 'https://img.icons8.com/fluency/48/000000/facebook-new.png'
    },
    {
        name: 'Connect with Google',
        imageUrl: 'https://img.icons8.com/color/48/000000/google-logo.png'
    },
    {
        name: 'Connect with Apple',
        imageUrl: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png'
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
        marginTop: 10,
        marginBottom: -20
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

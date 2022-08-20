import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Divider from 'react-native-divider'
import Validator from 'email-validator'
import { Icon, icons, letYouInStyles, PrimaryButton } from '../component/Exports'

const LogInForm = ({navigation}) => {
    const CreateAccountSchema =Yup.object().shape({
        email: Yup.string().email().required(''),
        password: Yup.string().required().min(6, 'Password Invalid')
    })
  return (
    <View>
      <Text style={styles.headerText}>Login to Your Account</Text>
      <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={(values) => console.log(values.email, values.password)}
      validationSchema={CreateAccountSchema}
      validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, isValid, values}) => (
            <>
                <View style={styles.emailContainer}>
                <Image source={{ uri: values.email < 1 || Validator.validate(values.email) ? 
                'https://img.icons8.com/fluency-systems-filled/48/b5b5b5/new-post.png' : 
                'https://img.icons8.com/fluency-systems-filled/48/ff0000/new-post.png'}} 
                style={styles.emailIcon}/>
                <TextInput 
                    placeholder='Email' autoCapitalize='none'
                    keyboardType='email-address' textContentType='emailAddress'
                    onChangeText={handleChange('email')} onBlur={handleBlur('email')}
                    value={values.email} style={[styles.emailInputField, {
                        borderWidth: values.email < 1 || Validator.validate(values.email) ? 0 : 1,
                        borderColor: values.email < 1 || Validator.validate(values.email) ? '' : 'red',
                        backgroundColor: values.email < 1 || Validator.validate(values.email) ? '#f1f1f1' : '#ffd6d6',
                    }]} 
                />
                </View>
                <View style={styles.emailContainer}>
                <Image source={{ uri: 1 > values.password.length || values.password.length >= 6 ? 
                'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/b5b5b5/external-padlock-interface-kiranshastry-solid-kiranshastry.png' : 
                'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ff0000/external-padlock-interface-kiranshastry-solid-kiranshastry.png'
                }} 
                style={styles.passwordIcon}/>
                <TextInput 
                    placeholder='Password' autoCapitalize='none'
                    keyboardType='password' textContentType='password'
                    onChangeText={handleChange('password')} onBlur={handleBlur('password')}
                    value={values.password} style={[styles.passwordInputField, {
                        borderWidth: 1 > values.password.length || values.password.length >= 6 ? 0 : 1,
                        borderColor: 1 > values.password.length || values.password.length >= 6 ? '' : 'red',
                        backgroundColor: 1 > values.password.length || values.password.length >= 6 ? '#f1f1f1' : '#ffd6d6',                        
                    }]} secureTextEntry={true}
                />
                </View>
                <BouncyCheckbox text='Remember me' fillColor='#007aff'
                style={styles.checkbox} textStyle={{ fontWeight: '500', color: 'black'}}
                onPress={(isSelected) => console.log(isSelected)}
                />
                <PrimaryButton buttonStyle={styles.button} buttonText='Log in' disabled={!isValid} buttonFunc={handleSubmit}/>
                <Divider orientation='center' color='#000000' borderColor='#d3d3d3'>or continue with</Divider>
                <View style={{ flexDirection: 'row'}}>
                <Icon imgUrl={icons[1].imageUrl} 
                imgStyle={styles.socialSignUp} containerStyle={[styles.containerStyle, {marginLeft: 50}]} />
                 <Icon imgUrl={icons[2].imageUrl} 
                imgStyle={styles.socialSignUp} containerStyle={styles.containerStyle} />
                 <Icon imgUrl={icons[3].imageUrl} 
                imgStyle={styles.socialSignUp} containerStyle={styles.containerStyle} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                <Icon textName={"Don't have an account?"}/>
                <Icon textName={' Sign up'} textStyle={letYouInStyles.signUp} press={() => navigation.push('CreateAccountScreen')}/>
                </View>
            </>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create ({
    headerText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 30,
        textAlign: 'center',
    },
    emailInputField: {
        fontSize: 16,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 10,
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: '#f1f1f1',
        zIndex: 1,
        paddingLeft: 57,
        fontWeight: '600'
    },
    emailIcon: {
        width: 25, 
        height: 25,
        position: 'absolute',
        marginTop: 53,
        marginLeft: 40,
        zIndex: 2
    },
    passwordInputField: {
        fontSize: 16,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 10,
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: '#f1f1f1',
        zIndex: 1,
        paddingLeft: 57,
        fontWeight: '600'
    },
    passwordIcon: {
        width: 25, 
        height: 25,
        position: 'absolute',
        marginTop: 38,
        marginLeft: 40,
        zIndex: 2
    },
    checkbox: {
        alignSelf: 'center',
        marginTop: 10,
    },
    button: {
        color: 'white',
        width: 380,
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
        marginTop: 20
    },
    socialSignUp: {
        width: 30,
        height: 30,
    },
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 90,
        height: 60,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        alignItems: 'center',
        marginHorizontal: 5,
    },
})

export default LogInForm
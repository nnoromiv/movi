import React, { useState } from 'react'
import { Button, FormInput, Social, Text } from '..'
import { TouchableOpacity, View } from 'react-native'
import tw from '../../tailwind'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { HandleSubmitValues } from '../../types'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Divider from 'react-native-divider'
import { pattern } from '../../constants'

const OnBoard = ({navigation} : any) => {

  const [hidePassword, setHidePassword] = useState<boolean>(true)

  const OnBoardingForm = Yup.object().shape({
    email: Yup.string().email().required(''),
    password: Yup.string().required().min(6, 'Password Must be greater than 6').matches(pattern)
  })

  const handleSubmit = ({ values }: HandleSubmitValues) => {
    console.log(values.email, values.password)
    navigation.push('Options', { email: values.email })
  }

  return (
    <View style={tw`my-auto mt-10`}>
      <Formik initialValues={{
        email: "",
        password: ""
      }}
        onSubmit={
          values => handleSubmit({ values })
        }
        validationSchema={OnBoardingForm}
        validateOnMount
        >
        {({ handleBlur, handleChange, handleSubmit, isValid, values, errors }) => (
          <>
            <FormInput
              logic={!(errors.email)}
              sourceError='https://img.icons8.com/fluency-systems-filled/48/b5b5b5/new-post.png'
              source='https://img.icons8.com/fluency-systems-filled/48/ff0000/new-post.png'  
              placeholder='Email'
              keyboardType='email-address'
              textContentType='emailAddress'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />

            <FormInput
              logic={!(errors.password)}
              sourceError= 'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/b5b5b5/external-padlock-interface-kiranshastry-solid-kiranshastry.png'
              source= 'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ff0000/external-padlock-interface-kiranshastry-solid-kiranshastry.png'  
              placeholder='Password'
              textContentType='password'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={hidePassword}
            />

            <View style={tw`flex flex-row justify-between mt-4 px-3`}>
              <BouncyCheckbox text='Remember Me' fillColor='#007aff'
                style={tw` self-start`}
              />

              <BouncyCheckbox text='Show Password' fillColor='#007aff'
                onPress={() => setHidePassword(!hidePassword)}
                style={tw`self-end`}
              />

            </View>
            <Button
              title='Join Us'
              style={
                `mt-20 mb-5 py-5 rounded-2xl ${isValid ? 'opacity-100' : 'opacity-40'
                }`
              }
              onPress={handleSubmit}
              disabled={isValid ? false : true} />

            <Divider orientation='center' color='#000000' borderColor='#d3d3d3' >or continue with</Divider>

            <Social faceBook='' google='' apple='' style={`flex-row mt-5 justify-center`} iconStyle={`border-0 w-1/3`} />

            <View style={tw`mt-3 flex flex-row justify-center`}>
              <Text>Already have an account ? </Text>
              <TouchableOpacity onPress={() => navigation.push('Options')}>
                <Text style={tw`text-[#007aff] font-extrabold`}>Log In</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}

export default OnBoard
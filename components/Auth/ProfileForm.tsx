import React, { useState } from 'react'
import { View } from 'react-native'
import * as Yup from 'yup'
import tw from '../../tailwind'
import { Formik } from 'formik'
import { HandleSubmitProfile } from '../../types'
import { Button, FormInput, Text } from '..'
import { Dropdown } from 'react-native-element-dropdown'


const ProfileForm = () => {

  const [selectedGender, setSelectedGender] = useState<string>('Select your gender')

  const ProfileFormSchema = Yup.object().shape({
    fullName: Yup.string().required(),
    userName: Yup.string().required(),
    email: Yup.string().email(),
    phoneNumber: Yup.string().required(),
    gender: Yup.string()
  })

  const handleSubmit = ({ values }: HandleSubmitProfile) => (
    console.log(values.fullName)
  )

  return (
    <View style={tw`my-auto mt-3`}>
      <Formik initialValues={{
        fullName: "",
        userName: '',
        email: "",
        phoneNumber: "",
        gender: ""
      }}
        onSubmit={values => handleSubmit({ values })}
        validateOnChange
        validationSchema={ProfileFormSchema}
      >
        {({ handleBlur, handleChange, handleSubmit, errors, isValid, values }) => (
          <>
            <Text style={tw`text-xs text-red-900`}>{errors.fullName}</Text>
            <FormInput
              placeholder='Full Name'
              textContentType='name'
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
              keyboardType='default'
            />

            <Text style={tw`text-xs text-red-900`}>{errors.userName}</Text>
            <FormInput
              placeholder='Username'
              textContentType='username'
              onChangeText={handleChange('userName')}
              onBlur={handleBlur('userName')}
              value={values.userName}
              keyboardType='default'
            />

            <Text style={tw`text-xs text-red-900`}>{errors.email}</Text>
            <FormInput
              placeholder='Email'
              textContentType='emailAddress'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType='email-address'
            />
            <Text style={tw`text-xs text-red-900`}>{errors.phoneNumber}</Text>
            <FormInput
              placeholder='Phone Number'
              textContentType='telephoneNumber'
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              keyboardType='number-pad'
              maxLength={11}
            />

            <Dropdown
              data={[
                {
                  label: 'Male',
                  value: '1'
                },
                {
                  label: 'Female',
                  value: '2'
                },
              ]}
              labelField='label'
              onChangeText={handleChange('gender')}
              valueField='value'
              placeholder='Gender'
              onChange={item => {
                setSelectedGender(item.label)
              }}
              value={values.gender}
            />
            <Text style={tw`text-base text-black`}>{selectedGender}</Text>

            <Button title='Profile me' style={`mt-10 py-3`} onPress={handleSubmit}/>
          </>
        )}
      </Formik>
    </View>
  )
}

export default ProfileForm
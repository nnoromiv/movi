import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { PrimaryButton } from '../component/Exports'
import { Dropdown } from 'react-native-element-dropdown'

const GENDER = [
  {
    label: 'Male',
    value: '1'
  },
  {
    label: 'Female',
    value: '2'
  },
]

const AccountSetUpProfileForm = ({navigation}) => {
  
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)
  
  const AccountSetUpProfileSchema = Yup.object().shape({
    fullName: Yup.string().required(),
    userName: Yup.string().required(),
    email: Yup.string().email(),
    phoneNumber: Yup.number().required(),
    gender: Yup.string()
  })
  
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={{color: 'blue'}}>
        Dropdown Label
        </Text>
        )
      }
    }
    return (
      <View style={{ marginTop: 50}}>
      <Formik 
      initialValues={{ fullName: '', userName: '', email: '', phoneNumber: '', gender: null}}
      onSubmit={(values) => console.log(values.email, values.fullName, values.gender, values.phoneNumber, values.userName)}
      validationSchema={AccountSetUpProfileSchema}
      validateOnMount={true}
      >
      {({ handleBlur, handleChange, handleSubmit, values, isValid}) => 
      <>
      
      <TextInput 
      placeholder='Full Name' autoCapitalize='none'
      textContentType='name'
      onChangeText={handleChange('fullName')} onBlur={handleBlur('fullName')}
      value={values.fullName} style={styles.inputField}
      />
      
      <TextInput 
      placeholder='Username' autoCapitalize='none'
      textContentType='username'
      onChangeText={handleChange('userName')} onBlur={handleBlur('userName')}
      value={values.userName} style={styles.inputField}
      />
      
      <TextInput
      placeholder='Email' autoCapitalize='none'
      keyboardType='email-address' textContentType='emailAddress'
      onChangeText={handleChange('email')} onBlur={handleBlur('email')}
      value={values.email} style={styles.inputField}
      />
      
      <TextInput
      placeholder='Phone Number'
      keyboardType='number-pad' textContentType='telephoneNumber' maxLength={11}
      onChangeText={handleChange('phoneNumber')} onBlur={handleBlur('phoneNumber')}
      value={values.phoneNumber} style={styles.inputField}
      />
     
      <View {...renderLabel()}>
      <Dropdown 
      data={GENDER} 
      maxHeight={300} 
      value={value}
      onChange={ item => {
        setValue(item.value)
      }}
      onChangeText={handleChange('gender')}
      labelField='label'
      valueField='value'
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      placeholder={'Gender'}
      style={styles.inputField}
      placeholderStyle={{ color: 'gray'}}
      />
      </View>
      
      <View style={{ flexDirection: 'row', 
      justifyContent: 'space-around', marginHorizontal: 25, marginTop: 30}}>
      <PrimaryButton buttonStyle={styles.buttonSkip} buttonText='Skip'/>
      <PrimaryButton buttonStyle={styles.buttonContinue} 
      buttonText='Continue'
      buttonFunc={handleSubmit}/>
      </View>
      </>
    }
    </Formik>
    </View>
    )
  }
  
  const styles = StyleSheet.create ({
    inputField: {
      width: 360,
      height: 60,
      fontSize: 16,
      borderRadius: 10,
      marginHorizontal: 20,
      marginBottom: 20,
      paddingHorizontal: 30,
      paddingVertical: 20,
      backgroundColor: '#f1f1f1',
      paddingLeft: 20,
      fontWeight: 'bold',
      fontFamily: 'Urbanist-Regular'
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
  
  export default AccountSetUpProfileForm
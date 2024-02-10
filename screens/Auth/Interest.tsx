import React, { useState } from 'react'
import { Button, Header, InterestChips, Text } from '../../components'
import { SafeAreaView, View } from 'react-native'
import tw from '../../tailwind'

const Interest = ({navigation} : any) => {
  
  const [gottenChip, setGottenChip] = useState<string[]>([])

 /**
  * The handleChange function updates the state variable "gottenChip" with the provided array of
  * strings.
  * @param {string[]} chips - The `chips` parameter is an array of strings.
  */
  const handleChange = (chips : string[]) => {
    setGottenChip(chips)
  }

  return (
    /* The code you provided is a React component called "Interest". It renders a view that allows
    users to choose their interests and get movie recommendations. Here's a breakdown of what each
    part of the code does: */
    <SafeAreaView style={tw`flex bg-white px-3 h-full`}>
      <Header logo={false} navigation={navigation} header='Interest' />
      <Text style={tw`text-[#212121] text-lg text-left font-semibold mt-5`}>Choose your Interest and get the best movie recommendations. Don't worry, you can always change it later. </Text>
      <InterestChips passedChips={handleChange}/>
      <Text>{gottenChip  + `,`}</Text>
      <View style={tw`flex flex-row justify-evenly mt-5`}>
        <Button 
        title='Skip'
        onPress={() => navigation.navigate('SetUpProfile')}
        textStyle={`bg-[#007aff] py-3 px-8 rounded-full `} />

        <Button 
        title='Continue' 
        textStyle={`bg-[#007aff] py-3 px-8 rounded-full`}
        onPress={() => navigation.navigate('SetUpProfile')}
        style={` ${gottenChip.length < 5 ? 'opacity-20' : 'opacity-100'}`} />
      </View>
    </SafeAreaView>
  )
}

export default Interest
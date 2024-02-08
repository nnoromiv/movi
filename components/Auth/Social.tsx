import React from 'react'
import { View } from 'react-native'
import { Button, Icon } from '..'
import tw from '../../tailwind'
import { SocialTitles } from '../../types'
import { APPLE_LOGO, FACEBOOK_LOGO, GOOGLE_LOGO } from '../../constants'

export const Social = ({faceBook, google, apple, style, iconStyle} : SocialTitles) => {
  return (
    <View style={tw`gap-4 mb-3 ${style}`}>        
        <Button title={faceBook} style={`bg-white border-[1px] border-gray-200 rounded-xl py-2 m-auto ${iconStyle}`} textStyle={'text-black'}>
          <Icon imageUrl={FACEBOOK_LOGO} imageStyle={tw`w-[40px]  h-[40px]`} />
        </Button>

        <Button title={google} style={`bg-white border-[1px] border-gray-200 rounded-xl py-2 m-auto ${iconStyle}`} textStyle={'text-black'}>
          <Icon imageUrl={GOOGLE_LOGO} imageStyle={tw`w-[40px]  h-[40px]`} />
        </Button>

        <Button title={apple} style={`bg-white border-[1px] border-gray-200 rounded-xl py-2 m-auto ${iconStyle}`} textStyle={'text-black'}>
          <Icon imageUrl={APPLE_LOGO} imageStyle={tw`w-[40px]  h-[40px]`} />
        </Button>
      </View>
  )
}

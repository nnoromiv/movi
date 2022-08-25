import React from 'react'
import { LogBox } from 'react-native'
import { HomeStack, SignedInStack, SignedOutStack } from './navigation'

const App = () => {
  LogBox.ignoreLogs(['componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.'])
  return (
    //<SignedOutStack />
    //<SignedInStack />
    <HomeStack />

  )
}

export default App
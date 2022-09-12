import { View, Text } from 'react-native'
import React, { useState } from 'react'
import SelectableChips from 'react-native-chip/SelectableChips'

const INITIALCHIPS = [
  "Action", "Drama","Comedy","Horror", "Adventure", "Thriller",
  "Romance", "Science", "Music", "Documentary", "Crime",
  "Fantasy", "Mystery", "Fiction", "Animation", "War", "History",
  "Television", "Superheroes", "Anime", "Sports", "K-Drama"
]

const ChoiceChips = () => {
  const [chipArray, setChipArray] = useState([])
  return (
    <View style={{ marginHorizontal: 10, marginTop: -90, marginBottom: 40}}>
    {
      chipArray.length <= 5 ? 
    <SelectableChips initialChips={INITIALCHIPS} 
    onChangeChips={(chips) => setChipArray(chips)}
    alertRequired={false}/> :
    <SelectableChips initialChips={INITIALCHIPS.filter(n => chipArray.includes(n))}
    onChangeChips={(chips) => setChipArray(chips)}
    alertRequired={false}/>
    }
    </View>
    
  )
}

export default ChoiceChips
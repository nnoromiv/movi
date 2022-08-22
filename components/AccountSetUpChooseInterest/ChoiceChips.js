import { View, Text } from 'react-native'
import React from 'react'
import SelectableChips from 'react-native-chip/SelectableChips'

const ChoiceChips = () => {
  return (
    <View style={{ position: 'absolute',
    top: 150, marginHorizontal: 10,}}>
    <SelectableChips initialChips={[
        "Action", "Drama","Comedy","Horror", "Adventure", "Thriller",
        "Romance", "Science", "Music", "Documentary", "Crime",
        "Fantasy", "Mystery", "Fiction", "Animation", "War", "History",
        "Television", "Superheroes", "Anime", "Sports", "K-Drama"
        ]} 
    onChangeChips={(chips) => console.log(chips)}
    alertRequired={false}/>
    </View>
  )
}

export default ChoiceChips
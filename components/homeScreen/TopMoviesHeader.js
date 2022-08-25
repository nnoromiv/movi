import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'


export const TopPopularMoviesHeader = () => {
  return (
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 20}}>
            <Text style={{marginTop: 20, fontSize: 24, fontWeight: 'bold', color: 'black'}}> Top Popular Movies</Text>
            <TouchableOpacity>
            <Text style={{marginTop: 22, fontSize: 20, color: '#007aff', fontWeight: 'bold'}}>
                See all
            </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export const TopNewReleasesHeader = () => {
    return (
      <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 20}}>
              <Text style={{marginTop: 20, fontSize: 24, fontWeight: 'bold', color: 'black'}}> New Releases</Text>
              <TouchableOpacity>
              <Text style={{marginTop: 22, fontSize: 20, color: '#007aff', fontWeight: 'bold'}}>
                  See all
              </Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }

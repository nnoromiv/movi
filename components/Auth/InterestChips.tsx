import React, { useState } from 'react';
import { View } from 'react-native';
import tw from '../../tailwind';
import SelectableChips from 'react-native-chip/SelectableChips';
import { Chip } from '../../types';
import { CHIPS } from '../../constants';



const InterestChips = ({ passedChips } : any ) => {
    const [selectedChips, setSelectedChips] = useState<Chip[]>([]);

    const handleSelect = (chips: Chip[]) => {
        selectedChips.length <= 5 
        ? (
            setSelectedChips(selectedChips.concat(chips)),
            passedChips(selectedChips.concat(chips))
        ) : (
            setSelectedChips(selectedChips.filter(chip => chip !== chips[0])),
            passedChips(selectedChips.filter(chip => chip !== chips[0]))
        )
    }

    return (
        <View style={tw`my-10`}>
            <SelectableChips
                initialChips={selectedChips.length <= 5 ? CHIPS : CHIPS.filter(n => selectedChips.includes(n))}
                onChangeChips={(chips: Chip[]) => (handleSelect(chips))}
                alertRequired={false} />
        </View>
    );
}

export default InterestChips;

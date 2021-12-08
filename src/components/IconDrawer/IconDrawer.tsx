import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionics from 'react-native-vector-icons/Ionicons'

interface Props {
    onPress: () => void
}

export const IconDrawer = ({onPress}: Props) => {
    return (
        <TouchableOpacity style={{marginLeft: 5}} onPress={onPress}>
          <Ionics name="reorder-three-sharp"  size={35}/>
        </TouchableOpacity>
    )
}
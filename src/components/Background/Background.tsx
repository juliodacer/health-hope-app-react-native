import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { colors } from '../../theme/colors'
import { sizes } from '../../theme/size'

export const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: colors.primary,
                width: sizes.width,
                height: sizes.height
            }}
        />
    )
}

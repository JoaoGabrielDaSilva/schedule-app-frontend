import React from 'react'
import { Dimensions, View } from 'react-native'
import Animated, { Extrapolate, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { Typography } from '../../../components/Typography'
import { ligh_theme } from '../../../theme'
import { Circle } from '../Circle'

import { styles } from './styles'

interface Props {
  index: number, 
  translateX: SharedValue<number>,
  data: {
    title: string,
    image: string,
    text: string
  }
}

const { width} = Dimensions.get('screen')


export const OnboardingContent = ({index, translateX, data: {title, text, image}}: Props) => {

  const Image = image

  const animatedStyles = useAnimatedStyle(() => {    
    return {
      opacity: interpolate(translateX.value, [(index - 1) * width, width * index, (index + 1) * width ], [0.4,1,0.4], {extrapolateLeft: Extrapolate.CLAMP, extrapolateRight: Extrapolate.CLAMP} ),
      transform: [
        {scale: interpolate(translateX.value, [(index - 1) * width, width * index, (index + 1) * width ], [0.5,1,0.5], {extrapolateLeft: Extrapolate.CLAMP, extrapolateRight: Extrapolate.CLAMP})}
      ]
    }
  })

  

  return (<Animated.View style={[animatedStyles, styles.wrapper, {paddingHorizontal: ligh_theme.spacing.lg}]}>
    <Typography  style={{alignSelf: 'flex-start', marginTop: ligh_theme.spacing.xlg}} variant='heading'>{title}</Typography>
        <Animated.View>
        <Image style={[styles.image]}/>
        </Animated.View>
        <Typography style={{marginTop: ligh_theme.spacing.lg}}>{text}</Typography>
      </Animated.View>)
}
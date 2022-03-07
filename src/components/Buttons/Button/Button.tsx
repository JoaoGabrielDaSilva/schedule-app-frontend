import React from 'react'
import {StyleProp, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle} from 'react-native'
import { Button as ButtonTypes } from '../../../theme/defaultTheme/Button/Button'
import { Ionicons } from '@expo/vector-icons'

type Props = ButtonTypes & TouchableOpacityProps & {
  text: string
  onPress: () => void
  icon?: keyof typeof Ionicons.glyphMap;
} 

import { ligh_theme } from '../../../theme'

const buttonTheme = ligh_theme.button

const stylesWithIcon: StyleProp<ViewStyle> = { flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between'}

const stylesWithoutIcon: StyleProp<ViewStyle> = { alignItems: 'center'}


export const Button = ({onPress, text, variant = 'contained', padding, size = 'default', icon, ...props}: Props) => {

  const variantStyles = {...buttonTheme.variant[variant]}

  const containerStyles = {...variantStyles.container, padding: ligh_theme.spacing[padding], ...buttonTheme.size[size] }

  const textStyles = variantStyles.text

  const iconStyles = {...variantStyles.text, fontSize: ligh_theme.fontSize.md}
  
  
  return <TouchableOpacity onPress={onPress} {...props}>
    <View  style={[containerStyles, icon ? stylesWithIcon : stylesWithoutIcon]}>
    <Text style={[textStyles]}>
      {text}
    </Text>
    {icon ? <Ionicons name={icon} style={[iconStyles]} /> : null}
    </View>
    
  </TouchableOpacity>
}
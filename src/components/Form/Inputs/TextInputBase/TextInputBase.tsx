import React, { RefObject, useEffect, useState } from 'react'
import { TextInput as Input, TextInputProps, Text, NativeSyntheticEvent, TextInputFocusEventData, ViewStyle, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, BackHandler } from 'react-native'
import {Control, FieldValues} from 'react-hook-form'

import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { ligh_theme } from '../../../../theme'
import { StyleProp } from 'react-native'
import { FLOATING_LABEL_STATES, INPUT_RANGE, INPUT_TYPES } from './constants'

type InputTypes = 'text' | 'password'

export interface TextInputBaseProps extends TextInputProps {
  name: string
  control: Control<FieldValues>
  label: string
  defaultValue?: string
  style?: StyleProp<ViewStyle>
  value: string
  type?: InputTypes
  icon?: keyof typeof Ionicons.glyphMap;
}


const TextInputBase = ({name, value, control,label, onChangeText, defaultValue = '', onFocus, onBlur, style, type = 'text', icon = 'mail', ...props}: TextInputBaseProps, ref: RefObject<TextInput>) => {
console.log(value);

  const [isTextHidden, setIsTextHidden] = useState(true)

  const focus = useSharedValue(defaultValue ? 1 : 0)

  const floatingLabelStyles = useAnimatedStyle(() => {
    return {
      top: interpolate(focus.value, INPUT_RANGE, [FLOATING_LABEL_STATES.DISABLED.TOP, FLOATING_LABEL_STATES.ENABLED.TOP]),
      left: interpolate(focus.value, INPUT_RANGE, [FLOATING_LABEL_STATES.DISABLED.LEFT, FLOATING_LABEL_STATES.ENABLED.LEFT]),
    }
  })

  const inputStyles = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(focus.value, INPUT_RANGE, [ligh_theme.input.borderColor.unFocused, ligh_theme.input.borderColor.focused])
    }
  })

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    focus.value = withTiming(1, {duration: 200})

    if (onFocus) {
      onFocus(e)
    }
  }

  const handleBlur = (e?: NativeSyntheticEvent<TextInputFocusEventData>) => {
    console.log(value);
    
    if (!value) {
      focus.value = withTiming(0, {duration: 200})
      ref?.current?.blur()
    }

    if (onBlur) {
      onBlur(e)
    }
  }

  const handleClickInContainer = () => {    
    if (ref && ref?.current) {
      ref.current.focus()
    }
  }
  
  const toggleVisibility = () => {
    setIsTextHidden(current => !current)
  }

  useEffect(() => {
    const keyboardListener = Keyboard.addListener(('keyboardDidHide'), () => handleBlur())
    
    return () => keyboardListener.remove()
  }, [])

  return (
      <Animated.View style={[styles.container, inputStyles, style]}>
        <Animated.View style={[styles.floatingLabelWrapper, floatingLabelStyles]}>
          <Text style={styles.floatingLabel}>{label}</Text>
        </Animated.View>
        <Ionicons name={icon} style={styles.icon} onPress={handleClickInContainer}/>
        <Input ref={ref} value={value} style={styles.input} onChangeText={text => onChangeText(text)} onFocus={handleFocus} onBlur={handleBlur} secureTextEntry={type === 'password' && isTextHidden} {...props}/>
        {type === 'password' &&  <Ionicons name={isTextHidden ? 'eye-off' : 'eye'} style={styles.icon} onPress={toggleVisibility}/>}
      </Animated.View>
 )
}

export default React.forwardRef(TextInputBase)
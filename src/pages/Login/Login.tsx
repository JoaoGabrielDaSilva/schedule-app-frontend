import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Dimensions, Keyboard, KeyboardAvoidingView, TextInput as TextInputRef, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import TextInput from '../../components/Form/Inputs/TextInput/TextInput'

import LoginImage from '../../assets/svg/Login/girl.svg'

import { styles } from './styles'
import { ligh_theme } from '../../theme'
import { Button } from '../../components/Buttons/Button'
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('screen')
interface FieldValues {
  email: string
  password: string
}

export const Login = () => {

  const {control, handleSubmit} = useForm({mode: 'onSubmit'})

  const emailRef = useRef<TextInputRef>()
  const passwordRef = useRef<TextInputRef>()

  const onSubmit = ({email, password}: FieldValues) => {
    Keyboard.dismiss()
  }

  const handleNextInput= () => {

    
  }

  
    return <SafeAreaView style={styles.container}>
       <KeyboardAvoidingView behavior='position'>
    <ScrollView keyboardShouldPersistTaps="always">

    <View style={{ flex: 1, paddingHorizontal: 20, alignItems: 'center'}}>
      <LoginImage width={width} height={height * 0.3}/>
      <TextInput name="email" icon="mail" control={control} label="E-mail" style={{marginTop: 50}} ref={emailRef} onSubmitEditing={handleNextInput} returnKeyType="next" returnKeyLabel='Próximo'/>
      <TextInput name="password" type='password' icon="lock-closed" control={control} label="Password" style={{marginTop: 20}} ref={passwordRef} onSubmitEditing={handleSubmit(onSubmit)} returnKeyType="done" returnKeyLabel='Pronto'/>
      <Button variant='contained' text="Login" onPress={handleSubmit(onSubmit)} padding='lg' size='fill' style={{marginTop: 50}}/>

    </View>
    </ScrollView>
  </KeyboardAvoidingView>
  </SafeAreaView>
}
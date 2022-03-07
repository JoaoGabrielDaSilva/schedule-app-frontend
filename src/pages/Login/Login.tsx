import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { TextInput as TextInputRef, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInput from '../../components/Form/Inputs/TextInput/TextInput'

import { styles } from './styles'


export const Login = () => {

  const {control} = useForm({mode: 'onSubmit'})

  const emailRef = useRef<TextInputRef>()

  
  return <SafeAreaView style={styles.container}>
    <View style={{ paddingHorizontal: 20}}>
      <TextInput name="email" icon="mail" control={control} label="E-mail" style={{marginTop: 50}} ref={emailRef}/>
      <TextInput name="password" type='password' icon="lock-closed" control={control} label="Password" style={{marginTop: 50}} ref={emailRef}/>
    </View>
  </SafeAreaView>
}
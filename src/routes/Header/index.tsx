import { StackHeaderProps } from '@react-navigation/stack'
import React from 'react'
import {Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
 
import {styles } from './styles'

export const Header = ({options, route: {name}}: StackHeaderProps) => {
  
  return (<SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </SafeAreaView>)
}
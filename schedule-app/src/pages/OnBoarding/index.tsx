import React from 'react'
import { Dimensions, SafeAreaView, View } from 'react-native'
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated'

import { ligh_theme } from '../../theme'
import SvgImage from '../../assets/svg/Onboarding/step_1.svg'

import { Button } from '../../components/Buttons/Button'
import { Typography } from '../../components/Typography/Typography'

import { styles } from './styles'
import { Circle } from './Circle/Circle'

const { width } = Dimensions.get('screen')


const steps = [0, 1, 3, 4]

export const Onboarding = () => {

  const translateX = useSharedValue(1)


  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x
    }
  })

  const imageStyles= useAnimatedStyle(() => {

    const index = Math.ceil(translateX.value / width)
    console.log(index);
    

    return {
      transform: [
        {translateX: interpolate(
          translateX.value,
          [(index - 1) * width, index * width, (index + 1) * width],
          [-1000, 0, 100]
        )}
      ]
    }
  })

 


  return (
    <SafeAreaView style={[styles.container]}>
      <Animated.ScrollView  onScroll={scrollHandler} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      <View style={[styles.wrapper,  {paddingHorizontal: ligh_theme.spacing.lg}]}>
      <Typography  style={{alignSelf: 'flex-start', marginTop: ligh_theme.spacing.xlg}} variant='heading'>Bem-Vindo(a)</Typography>
        <Animated.View style={imageStyles}>

        <SvgImage style={[styles.image ]} />
        </Animated.View>
        <Typography style={{marginTop: ligh_theme.spacing.lg}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. </Typography>
      </View>
      <View style={[ styles.wrapper, {paddingHorizontal: ligh_theme.spacing.lg}]}>
        <SvgImage style={[styles.image ]} />
        <Typography style={{alignSelf: 'flex-start', marginTop: ligh_theme.spacing.lg}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. </Typography>
      </View>
      <View style={[ styles.wrapper, {paddingHorizontal: ligh_theme.spacing.lg}]}>
        <SvgImage style={[styles.image ]} />
        <Typography style={{alignSelf: 'flex-start', marginTop: ligh_theme.spacing.lg}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. </Typography>
      </View>
      <View style={[ styles.wrapper, {paddingHorizontal: ligh_theme.spacing.lg}]}>
        <SvgImage style={[styles.image ]} />
        <Typography style={{alignSelf: 'flex-start', marginTop: ligh_theme.spacing.lg}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. </Typography>
      </View>
      </Animated.ScrollView>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

      {steps.map((_, index) => ( <Circle key={index} index={index} translateX={translateX}/>
))}
      </View>
      <Button onPress={() => {}} style={{alignSelf: 'center', marginBottom: ligh_theme.spacing.xlg}} text="Button" variant="contained" padding='md' size='fill' icon="ios-arrow-forward"/>
    
    </SafeAreaView>)
}
import React, { useRef } from 'react'
import { Dimensions, SafeAreaView, View } from 'react-native'
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate, useAnimatedRef } from 'react-native-reanimated'

import { ligh_theme } from '../../theme'
import SvgImage from '../../assets/svg/Onboarding/step_1.svg'

import { Button } from '../../components/Buttons/Button'
import { Typography } from '../../components/Typography/Typography'

import { styles } from './styles'
import { Circle } from './Circle/Circle'
import { OnboardingContent } from './OnboardingContent'
import { ScrollView } from 'react-native-gesture-handler'

const { width } = Dimensions.get('screen')



const data = [
  {
    title: 'Bem-Vindo(a)',
    image: SvgImage,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. '
  },
  {
    title: 'Bem-Vindo(a)',
    image: SvgImage,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. '
  },
  {
    title: 'Bem-Vindo(a)',
    image: SvgImage,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. '
  },
  {
    title: 'Bem-Vindo(a)',
    image: SvgImage,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. '
  },
]

export const Onboarding = () => {

  const translateX = useSharedValue(0)

  const scrollViewRef = useAnimatedRef()

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x
    }
  })

  const nextSlide = () => {
    
    console.log(scrollViewRef?.current.s);
    if (scrollViewRef && scrollViewRef?.current) {
      const currentIndex = translateX.value / width
      if (currentIndex < data.length) {
        
        return scrollViewRef.current?.scrollTo({x: currentIndex * width, animated: true})
      }
      console.log('fim');
      
    }
  }


  return (
    <SafeAreaView  style={[styles.container]}>
      <Animated.ScrollView ref={scrollViewRef} onScroll={scrollHandler} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return <OnboardingContent key={index} index={index} data={item} translateX={translateX}/>
        })}
      </Animated.ScrollView>
      <View style={{flex: 1,flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        {data.map((_, index) => ( <Circle key={index} index={index} translateX={translateX}/>
        ))}
      </View>
      <Button onPress={nextSlide} style={{flex: 1,alignSelf: 'center', marginBottom: ligh_theme.spacing.xlg}} text="Button" variant="contained" padding='md' size='fill' icon="ios-arrow-forward"/>
    
    </SafeAreaView>)
}
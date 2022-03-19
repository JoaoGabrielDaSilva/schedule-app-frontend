import React from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useAnimatedRef,
  withTiming,
} from "react-native-reanimated";

import { ligh_theme } from "../../theme";
import SvgImage from "../../assets/svg/Onboarding/step_1.svg";

import { Button } from "../../components/Buttons/Button";

import { styles } from "./styles";
import { Circle } from "./Circle/Circle";
import { OnboardingContent } from "./OnboardingContent";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const data = [
  {
    title: "Bem-Vindo(a)",
    image: SvgImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. ",
  },
  {
    title: "Bem-Vindo(a)",
    image: SvgImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. ",
  },
  {
    title: "Bem-Vindo(a)",
    image: SvgImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. ",
  },
  {
    title: "Bem-Vindo(a)",
    image: SvgImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ex, malesuada et sapien sit amet, pharetra congue nibh. Nullam non faucibus velit. ",
  },
];

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export const Onboarding = ({ navigation: { navigate } }) => {
  const translateX = useSharedValue(0);

  const scrollViewRef = useAnimatedRef<ScrollView>();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const nextSlide = () => {
    const currentIndex = Math.round(translateX.value / width);
    const nextSlideX = (currentIndex + 1) * width;

    const isLastSlide = currentIndex + 1 === data.length;

    if (scrollViewRef && scrollViewRef?.current) {
      if (!isLastSlide) {
        return scrollViewRef?.current?.scrollTo({
          x: nextSlideX,
          animated: true,
        });
      }
      console.log("s");

      navigate("Login");
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <AnimatedScrollView
        overScrollMode="never"
        ref={scrollViewRef}
        onScroll={scrollHandler}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => {
          return (
            <OnboardingContent
              key={index}
              index={index}
              data={item}
              translateX={translateX}
            />
          );
        })}
      </AnimatedScrollView>
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((_, index) => (
          <Circle key={index} index={index} translateX={translateX} />
        ))}
      </View>
      <View style={{ padding: ligh_theme.spacing.xlg }}>
        <Button
          onPress={nextSlide}
          style={{ marginBottom: ligh_theme.spacing.xlg }}
          text="Button"
          variant="contained"
          sizeMode="maxWidth"
          icon="ios-arrow-forward"
        />
      </View>
    </SafeAreaView>
  );
};

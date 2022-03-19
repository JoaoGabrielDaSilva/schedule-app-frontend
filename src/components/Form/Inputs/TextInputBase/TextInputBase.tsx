import React, {
  RefObject,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  TextInput as Input,
  TextInputProps,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewStyle,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  BackHandler,
} from "react-native";
import { Control, FieldError, FieldValues } from "react-hook-form";

import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ligh_theme } from "../../../../theme";
import { StyleProp } from "react-native";
import { FLOATING_LABEL_STATES, INPUT_RANGE, INPUT_TYPES } from "./constants";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";

type InputTypes = "text" | "password";

export interface TextInputBaseProps extends TextInputProps {
  name: string;
  control: Control<FieldValues>;
  label: string;
  defaultValue?: string;
  style?: StyleProp<ViewStyle>;
  value: string;
  type?: InputTypes;
  icon?: keyof typeof Ionicons.glyphMap;
  error?: FieldError;
}

const TextInputBase = (
  {
    name,
    value,
    control,
    label,
    onChangeText,
    defaultValue = "",
    onFocus,
    onBlur,
    style,
    type = "text",
    icon = "mail",
    error,
    ...props
  }: TextInputBaseProps,
  ref: RefObject<TextInput>
) => {
  const [isTextHidden, setIsTextHidden] = useState(true);

  const focus = useSharedValue(defaultValue ? 1 : 0);
  const floatingLabel = useSharedValue(defaultValue ? 1 : 0);

  const floatingLabelStyles = useAnimatedStyle(() => {
    return {
      top: interpolate(floatingLabel.value, INPUT_RANGE, [
        FLOATING_LABEL_STATES.DISABLED.TOP,
        FLOATING_LABEL_STATES.ENABLED.TOP,
      ]),
      left: interpolate(floatingLabel.value, INPUT_RANGE, [
        FLOATING_LABEL_STATES.DISABLED.LEFT,
        FLOATING_LABEL_STATES.ENABLED.LEFT,
      ]),
    };
  });

  const labelStyles = useAnimatedStyle(() => {
    return {
      color: !!error ? "red" : ligh_theme.color.text,
    };
  });

  const inputStyles = useAnimatedStyle(() => {
    return {
      borderColor: !!error
        ? "red"
        : interpolateColor(focus.value, INPUT_RANGE, [
            ligh_theme.input.borderColor.unFocused,
            ligh_theme.input.borderColor.focused,
          ]),
    };
  });

  const handleFocus = (e?: NativeSyntheticEvent<TextInputFocusEventData>) => {
    focus.value = withTiming(1, { duration: 200 });
    floatingLabel.value = withTiming(1, { duration: 200 });

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e?: NativeSyntheticEvent<TextInputFocusEventData>) => {
    console.log("TESTE", value);

    if (!value) {
      floatingLabel.value = withTiming(0, { duration: 200 });
    }

    focus.value = withTiming(0, { duration: 200 });

    ref?.current?.blur();

    if (onBlur) {
      onBlur(e);
    }
  };

  const handleClickInContainer = () => {
    if (ref && ref?.current) {
      ref.current.focus();
    }
  };

  const toggleVisibility = () => {
    setIsTextHidden((current) => !current);
  };

  useEffect(() => {
    const keyboardListener = Keyboard.addListener("keyboardDidHide", () => {
      ref.current.blur();
    });
    return () => keyboardListener.remove();
  }, []);

  return (
    <>
      <Animated.View style={[styles.container, inputStyles, style]}>
        <Animated.View
          style={[styles.floatingLabelWrapper, floatingLabelStyles]}
        >
          <Animated.Text style={[styles.floatingLabel, labelStyles]}>
            {label}
          </Animated.Text>
        </Animated.View>
        <Ionicons
          name={icon}
          style={styles.icon}
          onPress={handleClickInContainer}
        />
        <Input
          ref={ref}
          value={value}
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={type === "password" && isTextHidden}
          autoCorrect={false}
          {...props}
        />
        {type === "password" && (
          <Ionicons
            name={isTextHidden ? "eye-off" : "eye"}
            style={styles.eyeIcon}
            onPress={toggleVisibility}
          />
        )}
      </Animated.View>
      {!!error && <ErrorMessage message={error.message} />}
    </>
  );
};

export default React.forwardRef(TextInputBase);

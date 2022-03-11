import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  TextInput as TextInputRef,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import TextInput from "../../components/Form/Inputs/TextInput/TextInput";

import LoginImage from "../../assets/svg/Login/girl.svg";
import Google from "../../assets/svg/Login/google.svg";

import { styles } from "./styles";
import { ligh_theme } from "../../theme";
import { Button } from "../../components/Buttons/Button";
import { BorderlessButton, ScrollView } from "react-native-gesture-handler";
import { loginScheme } from "./scheme";
import { Typography } from "../../components/Typography";

const { width, height } = Dimensions.get("screen");
interface FieldValues {
  email: string;
  password: string;
}

interface Props {
  navigation: { navigate: (screen: string, params?: {}) => void };
}

export const Login = ({ navigation: { navigate } }: Props) => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginScheme),
  });

  const emailRef = useRef<TextInputRef>();
  const passwordRef = useRef<TextInputRef>();

  const onSubmit = ({ email, password }: FieldValues) => {
    Keyboard.dismiss();

    setTimeout(() => {
      // navigate("Onboarding");
    }, 2000);
  };

  const handleNextInput = () => {
    passwordRef.current.focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <KeyboardAvoidingView behavior="position">
          <View style={{ paddingHorizontal: 20, alignItems: "center" }}>
            <LoginImage width={width} height={height * 0.3} />
            <TextInput
              ref={emailRef}
              name="email"
              icon="mail"
              control={control}
              label="E-mail"
              style={{ marginTop: 50 }}
              onSubmitEditing={handleNextInput}
              returnKeyType="next"
              returnKeyLabel="Próximo"
              blurOnSubmit={false}
            />
            <TextInput
              ref={passwordRef}
              name="password"
              type="password"
              icon="lock-closed"
              control={control}
              label="Password"
              style={{ marginTop: 20 }}
              onSubmitEditing={handleSubmit(onSubmit)}
              returnKeyType="done"
              returnKeyLabel="Pronto"
            />
            <Button
              variant="contained"
              text="Login"
              onPress={handleSubmit(onSubmit)}
              padding="lg"
              size="fill"
              style={{ marginTop: 50 }}
            />
          </View>
          <Typography
            color={ligh_theme.color.primary}
            style={{ marginTop: 50 }}
          >
            Don't have and accout yet? Sign up
          </Typography>
          <View style={styles.signUpWrapper}>
            <View style={styles.line} />
            <Typography style={{ paddingHorizontal: 20 }}>
              Sign up with
            </Typography>
            <View style={styles.line} />
          </View>
          <BorderlessButton onPress={() => {}} style={styles.googleWrapper}>
            <View style={styles.google}>
              <Google />
            </View>
          </BorderlessButton>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

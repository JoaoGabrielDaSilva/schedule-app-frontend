import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BackHandler,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput as TextInputRef,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

import TextInput from "../../components/Form/Inputs/TextInput/TextInput";

import LoginImage from "../../assets/svg/Login/girl.svg";
import Google from "../../assets/svg/Login/google.svg";

import { styles } from "./styles";
import { ligh_theme } from "../../theme";
import { Button } from "../../components/Buttons/Button";
import { BorderlessButton, ScrollView } from "react-native-gesture-handler";
import { loginScheme } from "./scheme";
import { Typography } from "../../components/Typography";
import { useAppDispatch } from "../../hooks/redux";
import { logout, saveUserInfo } from "../../store/ducks/user";
import { ErrorMessage } from "../../components/Form/ErrorMessage/ErrorMessage";

const { width, height } = Dimensions.get("screen");
interface FieldValues {
  email: string;
  password: string;
}

interface Props {
  navigation: { navigate: (screen: string, params?: {}) => void };
}

export const Login = ({ navigation: { navigate } }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginScheme),
  });
  const dispatch = useAppDispatch();

  const emailRef = useRef<TextInputRef>();
  const passwordRef = useRef<TextInputRef>();

  const onSubmit = ({ email, password }: FieldValues) => {
    Keyboard.dismiss();
    setLoading(true);

    setTimeout(() => {
      if (email === "joao.gabsilva1007@gmail.com" && password === "123") {
        dispatch(
          saveUserInfo({
            info: {
              id: "1231231",
              email: "joao.gabsilva1007@gmail.com",
              name: "João Gabriel",
            },
          })
        );
        setError("");
        setLoading(false);
        return;
      }
      setLoading(false);
      setError("email/password invalid, please try again");
    }, 2000);
  };

  const handleNextInput = () => {
    passwordRef.current.focus();
  };

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      dispatch(
        saveUserInfo({
          info: userInfo.user,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const backhandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => false
    );

    return () => backhandler.remove();
  }, []);

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
            {error ? <ErrorMessage message={error} align="center" /> : null}
            <Button
              variant="contained"
              text="Login"
              onPress={handleSubmit(onSubmit)}
              padding="lg"
              sizeMode="maxWidth"
              style={{ marginTop: 50 }}
              loading={loading}
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
          <BorderlessButton
            onPress={handleGoogleLogin}
            style={styles.googleWrapper}
          >
            <View style={styles.google}>
              <Google />
            </View>
          </BorderlessButton>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

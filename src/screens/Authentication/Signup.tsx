import { useNavigation } from "@react-navigation/core";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";
import { Pressable, StyleSheet, View } from "react-native";
import MyScreen from "../../components/MyScreen";
import AppText from "../../components/Ui/AppText";
import MyButton from "../../components/Ui/MyButton";
import Spacer from "../../components/Ui/Spacer";
import { colors } from "../../config/colors";
import MyInput from "../../components/Ui/MyInput";

interface fromProps {
  email: string;
  password: string;
  username: string;
}
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("This filed is required")
    .email("This filed is invalid"),
  username: Yup.string().required("This filed is required"),
  password: Yup.string()
    .required("This filed is required")
    .min(6, "This filed is invalid"),
});
const Signup = () => {
  const { navigate } = useNavigation<any>();
  const onSubmit = (z: fromProps, {}: FormikHelpers<fromProps>) => {};
  return (
    <MyScreen StausBarStyle="light-content" color="white">
      <Spacer size="md" />
      <View style={{ paddingHorizontal: 15 }}>
        <AppText
          font="lg"
          size="lg"
          color={colors.Pcolor}
          textStyle={{ marginBottom: 6, fontSize: 28 }}
        >
          We happy to join us
        </AppText>
        <AppText font="md" size="md" color={colors.txt2}>
          Sign Up to continue
        </AppText>
      </View>
      <Spacer size="lg" />
      <Spacer size="md" />
      <View style={styles.container}>
        <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "", username: "" }}
        >
          {({ handleSubmit }) => (
            <>
              <MyInput name="username" label="Username" />
              <Spacer />
              <MyInput name="email" label="Email" />
              <Spacer />
              <MyInput name="password" label="Password" />
              <AppText
                color={colors.txt}
                textStyle={{ fontSize: 13, marginLeft: "auto", marginTop: 4 }}
                font="md"
              >
                forgot password?
              </AppText>
              <Spacer size="lg" />
              <MyButton
                title="Sign Up"
                onPress={handleSubmit}
                txtStyle={{
                  fontWeight: "600",
                }}
              />
            </>
          )}
        </Formik>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingVertical: 10,
          backgroundColor: colors.bg,
        }}
      >
        <AppText color={colors.txt} textStyle={{ fontSize: 13 }} center>
          You have an account
        </AppText>
        <Pressable onPress={() => navigate("login")}>
          <AppText
            textStyle={{
              fontSize: 13,
              marginLeft: 3,
              textDecorationLine: "underline",
            }}
            font="md"
            color={colors.Pcolor}
          >
            Login
          </AppText>
        </Pressable>
      </View>
    </MyScreen>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  logo: {
    height: 110,
    width: 110,
  },
});

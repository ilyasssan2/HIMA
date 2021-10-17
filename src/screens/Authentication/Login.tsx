import { useNavigation } from "@react-navigation/core";
import { Formik, FormikHelpers } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { Pressable, StyleSheet, View } from "react-native";
import MyScreen from "../../components/MyScreen";
import AppText from "../../components/Ui/AppText";
import MyButton from "../../components/Ui/MyButton";
import Spacer from "../../components/Ui/Spacer";
import { colors } from "../../config/colors";
import MyInput from "../../components/Ui/MyInput";
import { AuthContext } from "../../contexts/authContext";

interface fromProps {
  email: string;
  password: string;
}
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("this filed is required")
    .email("this filed is invalid"),
  password: Yup.string()
    .min(6, "this filed is invalid")
    .required("this filed is required"),
});
const Login = () => {
  const { navigate } = useNavigation<any>();
  const { setAuth } = useContext(AuthContext);
  const onSubmit = (z: fromProps, {}: FormikHelpers<fromProps>) => {
    setAuth({ id: 1 });
  };
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
          Wellcom back
        </AppText>
        <AppText font="md" size="md" color={colors.txt2}>
          Login to continue
        </AppText>
      </View>

      <Spacer size="lg" />
      <Spacer size="md" />
      <View style={styles.container}>
        <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "" }}
        >
          {({ handleSubmit }) => (
            <>
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
                title="Login"
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
          You dont have an account
        </AppText>
        <Pressable onPress={() => navigate("signup")}>
          <AppText
            textStyle={{
              fontSize: 13,
              marginLeft: 3,
              textDecorationLine: "underline",
            }}
            font="md"
            color={colors.Pcolor}
          >
            Sign up
          </AppText>
        </Pressable>
      </View>
    </MyScreen>
  );
};

export default Login;

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

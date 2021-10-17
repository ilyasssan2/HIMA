import React from "react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ScrollView, StyleSheet, View } from "react-native";
import MyScreen from "../../components/MyScreen";
import { colors, MyShadow } from "../../config/colors";
import AppText from "../../components/Ui/AppText";
import MyInput from "../../components/Ui/MyInput";
import Spacer from "../../components/Ui/Spacer";
import MyButton from "../../components/Ui/MyButton";
import ImagePickerForm from "../../components/Ui/ImagePicker";
import MyDatePicker from "../../components/Ui/MyDatePicker";
import MySelect from "../../components/Ui/MySelect";

interface fromProps {
  email: string;
  city: string;
  username: string;
  image: any;
  birthdate: "";
}
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("This filed is required")
    .email("This filed is invalid"),
  username: Yup.string().required("This filed is required"),
  city: Yup.string().required("This filed is required"),
  image: Yup.mixed().required("This filed is required"),
  birthdate: Yup.date().required("This filed is required"),
});
const EditProfile = () => {
  const onSubmit = (z: fromProps, {}: FormikHelpers<fromProps>) => {};
  return (
    <MyScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <AppText font="md" size="md">
          Edit profile
        </AppText>
        <Spacer />
        <View style={styles.innerContainer}>
          <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={{
              email: "",
              city: "",
              username: "",
              image: undefined,
              birthdate: "",
            }}
          >
            {({ handleSubmit }) => (
              <>
                <ImagePickerForm name="image" />
                <Spacer />
                <MyInput
                  name="username"
                  label="Username"
                  inputStyle={styles.inputStyle}
                />
                <Spacer />
                <MyInput
                  name="email"
                  label="Email"
                  inputStyle={styles.inputStyle}
                />
                <Spacer />
                <MyDatePicker
                  name="birthdate"
                  label="Birthdate"
                  inputStyle={styles.inputStyle}
                />
                <Spacer />
                <MySelect
                  name="city"
                  label="City"
                  inputStyle={styles.inputStyle}
                  items={[
                    { value: "Casablanca", label: "Casablanca" },
                    { value: "Rabat", label: "Rabat" },
                    { value: "Fez", label: "Fez" },
                  ]}
                  title="Choose your city"
                />
                <Spacer size="lg" />
                <MyButton
                  title="Update profile"
                  onPress={handleSubmit}
                  txtStyle={{
                    fontWeight: "600",
                  }}
                  btnStyle={{ height: 45 }}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </MyScreen>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 15,
  },
  innerContainer: {
    borderRadius: colors.radius,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 30,
    ...MyShadow,
  },
  inputStyle: {
    height: 44,
  },
});

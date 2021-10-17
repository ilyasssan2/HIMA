import { useFormikContext } from "formik";
import React from "react";
import {
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  ViewStyle,
} from "react-native";
import { colors } from "../../config/colors";
import AppText from "./AppText";
import FormError from "./Form/FormError";
interface props {
  placeholder?: string;
  label?: string;
  icon?: string;
  keyboardType?: KeyboardTypeOptions;
  inputStyle?: ViewStyle;
  name: string;
}
const MyInput: React.FC<props> = ({
  placeholder,
  label,
  keyboardType,
  inputStyle,
  name,
}) => {
  const { handleChange, errors, touched, values, setFieldTouched } =
    useFormikContext<any>();
  return (
    <>
      {label && (
        <AppText font="md" textStyle={styles.label}>
          {label}
        </AppText>
      )}
      <TextInput
        placeholder={placeholder}
        style={[
          styles.Input,
          inputStyle,
          {
            borderColor:
              touched[name!] && errors[name!] ? colors.red : colors.border,
            borderWidth: 1.5,
          },
        ]}
        keyboardType={keyboardType ? keyboardType : "default"}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        value={values[name!]}
      />
      <FormError
        error={errors[name!] as string}
        visible={errors[name!] && touched[name!] ? true : false}
      />
    </>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  Input: {
    borderRadius: colors.radius,
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    height: 50,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: "white",
  },
  label: {
    fontSize: 12,
    color: colors.txt,
    marginBottom: 3,
  },
});

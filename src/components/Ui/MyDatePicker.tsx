import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayJs from "dayjs";
import { useFormikContext } from "formik";
import AppText from "./AppText";
import FormError from "./Form/FormError";
import { colors } from "../../config/colors";

interface props {
  label?: string;
  inputStyle?: ViewStyle;
  name: string;
}
const MyDatePicker = ({ label, inputStyle, name }: props) => {
  const { errors, setFieldValue, touched, setFieldTouched, values } =
    useFormikContext<any>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setFieldTouched(name, true, false);
  };
  const handleConfirm = (date: any) => {
    setFieldValue(name, date ? date : "");
    hideDatePicker();
  };
  return (
    <>
      {label && (
        <AppText textStyle={styles.label} font="md">
          {label}
        </AppText>
      )}
      <TouchableOpacity
        style={[
          styles.Input,
          inputStyle,
          {
            borderColor:
              touched[name!] && errors[name!] ? colors.red : colors.border,
          },
        ]}
        onPress={showDatePicker}
      >
        {values[name] ? (
          <AppText textStyle={{ fontSize: 16 }} color="black">
            {dayJs(values[name]).format("DD/MM/YYYY")}
          </AppText>
        ) : null}
      </TouchableOpacity>
      <FormError
        error={errors[name] as string}
        visible={errors[name] && touched[name] ? true : false}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display="spinner"
      />
    </>
  );
};

export default MyDatePicker;

const styles = StyleSheet.create({
  Input: {
    borderRadius: colors.radius,
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1.5,
    height: 55,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: "white",
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    color: colors.txt,
    marginBottom: 3,
    alignSelf: "flex-start",
  },
});

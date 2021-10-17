import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import AppText from "../AppText";
interface props {
  error: string;
  visible: boolean;
}
const FormError = ({ error, visible }: props) => {
  return (
    <>
      {visible && (
        <AppText font="md" textStyle={styles.error}>
          {error}
        </AppText>
      )}
    </>
  );
};

export default FormError;

const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: colors.red,
    marginTop: 3,
  },
});

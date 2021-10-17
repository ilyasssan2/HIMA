import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import * as imagePicker from "expo-image-picker";
import { useFormikContext } from "formik";
import { colors } from "../../config/colors";
import FormError from "./Form/FormError";
import { config } from "../../config/Env";
import AntDesign from "@expo/vector-icons/AntDesign";

interface props {
  name: string;
  withEditIcon?: boolean;
}
const ImagePicker = ({ name, withEditIcon }: props) => {
  const {
    errors,
    touched,
    values,
    setFieldValue,
    setFieldTouched,
    initialValues,
  } = useFormikContext<any>();
  const image = values[name];
  const getAcces = async () => {
    const { granted } = await imagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return alert(
        "this app will not work properly if you didnt allow us get access"
      );
    }
  };
  useEffect(() => {
    getAcces();
  }, []);
  const HandelImageInput = async () => {
    const res: any = await imagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });
    setFieldTouched(name);
    if (res.uri) {
      setFieldValue(name, res.uri);
    }
  };
  return (
    <>
      <TouchableOpacity
        style={[
          styles.ImagePicker,
          touched[name] && errors[name] ? styles.ImagePickerError : null,
        ]}
        onPress={HandelImageInput}
      >
        {image || initialValues?.[name] ? (
          <Image
            source={{
              uri:
                values[name] !== initialValues?.[name]
                  ? values[name]
                  : config.BACKEND + initialValues?.[name],
              cache: "force-cache",
            }}
            style={[StyleSheet.absoluteFillObject, styles.img]}
          />
        ) : (
          <AntDesign
            size={42}
            color={touched[name] && errors[name] ? colors.red : colors.border}
            name="totop"
          />
        )}
        {withEditIcon && (
          <View style={styles.icon}>
            <AntDesign name="edit" size={16} fill="white" />
          </View>
        )}
      </TouchableOpacity>
      <FormError
        error={errors[name] as string}
        visible={errors[name] && touched[name] ? true : false}
      />
    </>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  ImagePicker: {
    height: 85,
    width: 85,
    borderRadius: colors.radius,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  ImagePickerError: {
    borderColor: colors.red,
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: colors.radius,
    zIndex: 10,
  },
  icon: {
    position: "absolute",
    zIndex: 11,
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: colors.Pcolor,
    right: -12.5,
    top: -12.5,
    alignItems: "center",
    justifyContent: "center",
  },
});

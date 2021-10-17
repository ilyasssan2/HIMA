import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  I18nManager,
  FlatList,
  ViewStyle,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../config/colors";
import MyScreen from "../MyScreen";
import AppText from "./AppText";
import MyButton from "./MyButton";
import SelectItem from "./SelectItem";
import FormError from "./Form/FormError";
import SearchInput from "./SearchInput";
import Spacer from "./Spacer";

interface props {
  items: any[];
  placeholder?: string;
  valueKey?: string;
  labelKey?: string;
  label?: string;
  closeOnSlect?: boolean;
  inputStyle?: ViewStyle;
  name: string;
  onChange?: (v: any) => any;
  title: string;
}
const MySelect = ({
  placeholder,
  label,
  items,
  labelKey = "label",
  valueKey = "value",
  closeOnSlect,
  inputStyle,
  name,
  onChange,
  title,
}: props) => {
  const { errors, setFieldValue, touched, setFieldTouched, initialValues } =
    useFormikContext<any>();
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState<any>(null);
  const intial: any = items.filter(
    (xs) => xs?.[valueKey] === initialValues?.[name]
  )[0];
  const [selectedItem, setSelectedItem] = useState<any>(intial ? intial : null);
  const [filteredItems, setFilteredItems] = useState<any>(items);
  const toggelSelect = () => {
    setSearchText(null);
    setFieldTouched(name, true, false);
    setOpen(!open);
  };
  const handelList = (v: any) => {
    if (v[valueKey] === selectedItem?.[valueKey]) {
      setSelectedItem("");
      setFieldValue(name, "");
      return;
    }
    setSelectedItem(v);
    setFieldValue(name, v?.[valueKey]);
    if (closeOnSlect) toggelSelect();
  };
  useEffect(() => {
    onChange && onChange(selectedItem?.[valueKey]);
  }, [selectedItem]);
  useEffect(() => {
    if (searchText && items) {
      const newItems = items.filter((item) => {
        const res = String(item[labelKey])
          .toLowerCase()
          .indexOf(searchText.toLowerCase(), 0);
        return res > -1 ? true : false;
      });
      setFilteredItems(newItems);
    } else {
      setFilteredItems(items);
    }
  }, [searchText]);

  return (
    <>
      <TouchableWithoutFeedback onPress={toggelSelect}>
        <View>
          {label && (
            <AppText textStyle={styles.label} font="md">
              {label}
            </AppText>
          )}

          <View
            style={[
              styles.Input,
              inputStyle,
              {
                borderColor:
                  errors[name!] && touched[name!] ? colors.red : colors.border,
              },
            ]}
          >
            {placeholder && !selectedItem?.[valueKey] && (
              <AppText
                size="md"
                textStyle={{ fontSize: 16 }}
                color={colors.txt2}
              >
                {placeholder}
              </AppText>
            )}
            {selectedItem?.[valueKey] && (
              <AppText size="md" textStyle={{ fontSize: 16 }} color="black">
                {selectedItem[labelKey]}
              </AppText>
            )}
            <View style={styles.Icon}>
              <AntDesign
                szie={32}
                name="down"
                color={
                  errors[name!] && touched[name!] ? colors.red : colors.txt
                }
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <FormError
        error={errors[name] as string}
        visible={errors[name] && touched[name] ? true : false}
      />
      <Modal visible={open} animationType="slide" collapsable>
        <MyScreen>
          <View style={{ paddingHorizontal: 15, flex: 1 }}>
            <View style={styles.headerContainer}>
              <AppText font="md" size="lg">
                {title}
              </AppText>
              <SearchInput
                inputStyle={{ height: 45, marginTop: 23 }}
                onChangeText={(value) => setSearchText(value)}
                placeholder="Search..."
              />
            </View>
            <Spacer size="md" />
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1 }}
              data={filteredItems}
              keyExtractor={(i) => i[valueKey]}
              renderItem={({ item }) => (
                <SelectItem
                  label={item[labelKey]}
                  onPress={handelList.bind(this, item)}
                  isSelected={
                    selectedItem?.[valueKey] === item[valueKey] ? true : false
                  }
                />
              )}
            />
            <View style={{ paddingVertical: 25 }}>
              <MyButton title="Done" onPress={toggelSelect} />
            </View>
          </View>
        </MyScreen>
      </Modal>
    </>
  );
};

export default MySelect;

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
  Icon: {
    position: "absolute",
    right: 15,
  },
  headerContainer: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
    color: colors.txt,
    marginBottom: 3,
    alignSelf: "flex-start",
  },
});

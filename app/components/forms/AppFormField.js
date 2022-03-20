import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../texts/AppText";
import { Spartan_500Medium } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function AppFormField({ placeholder, text, icon }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <View style={styles.textContainer}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={15} style={styles.icon} />
        )}
        <AppText>{text}</AppText>
      </View>
      <View style={styles.formInputField}>
        <TextInput placeholder={placeholder} style={styles.input}></TextInput>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formInputField: {
    width: "100%",
    height: 50,
    backgroundColor: colors.gray,
    marginTop: 5,
    marginBottom: 18,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  textContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontFamily: "Spartan_500Medium",
    alignSelf: "stretch",
  },
});

export default AppFormField;

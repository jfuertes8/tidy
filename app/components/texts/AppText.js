import React from "react";
import { Text, StyleSheet } from "react-native";

import { Spartan_500Medium } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import colors from "../../config/colors";

function AppText({ children, marginBottom, color = "black", fontSize = 14 }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text
      style={[
        styles.text,
        {
          marginBottom: marginBottom,
          color: colors[color],
          fontSize: fontSize,
        },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Spartan_500Medium",
    lineHeight: 22,
  },
});

export default AppText;
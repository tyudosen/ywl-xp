import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  title: string;
  handlePress: (data?: any) => void;
  titleStyle?: string;
};

const ThemedButton = ({
  lightColor,
  darkColor,
  title,
  handlePress,
  titleStyle,
  ...props
}: ThemedButtonProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary"
  );

  return (
    <TouchableOpacity
      className={`rounded-xl min-h-[62px] justify-center items-center px-2 ${props.className}`}
      style={[{ backgroundColor }]}
      onPress={handlePress}
      activeOpacity={0.7}

    >
      <ThemedText type="subtitle" className={`${titleStyle}`}>{title}</ThemedText>
    </TouchableOpacity>
  );
};

export default ThemedButton;

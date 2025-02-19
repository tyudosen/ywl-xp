import { View, Text, TextInput, StyleProp, ViewStyle } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

export type FormFieldProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  containerStyle?: string;
  onBlur?: () => void;
};

const FormField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  containerStyle,
  onBlur,
}: FormFieldProps) => {
    const [focused, setFocused] = useState(false);
  const borderColor = useThemeColor({}, "border");
  const backgroundColor = useThemeColor({}, "background");
  const focusedBorderColor = useThemeColor({}, "success");
  return (
    <View className={`space-y-2 ${containerStyle}`}>
      <ThemedText>{label}</ThemedText>
      <View
        style={[{ borderColor: focused ? focusedBorderColor : borderColor, backgroundColor}]}
        className="w-full h-16 px-4 border-2 rounded-2xl items-center"
      >
        <TextInput
          className="flex-1 text-white w-full"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onBlur={() => {
            onBlur?.();
            setFocused(false);
          }}
          onFocus={() => setFocused(true)}
        />
      </View>
    </View>
  );
};

export default FormField;

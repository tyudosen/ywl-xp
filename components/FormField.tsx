import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { IconSymbol } from "./ui/IconSymbol";

export type FormFieldProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  containerStyle?: string;
  onBlur?: () => void;
  keyboardType?: KeyboardTypeOptions;
};

const FormField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  containerStyle,
  keyboardType,
  onBlur,
}: FormFieldProps) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const borderColor = useThemeColor({}, "border");
  const backgroundColor = useThemeColor({}, "background");
  const focusedBorderColor = useThemeColor({}, "tint");
  const textColor = useThemeColor({}, "text");
  return (
    <View className={`space-y-2 ${containerStyle}`}>
      <ThemedText>{label}</ThemedText>
      <View
        style={[
          {
            borderColor: focused ? focusedBorderColor : borderColor,
            backgroundColor,
          },
        ]}
        className="w-full h-16 px-4 border-2 rounded-2xl items-center flex-row"
      >
        <TextInput
          style={[{ color: textColor }]}
          className="flex-1"
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={showPassword ? false : secureTextEntry}  
          onBlur={() => {
            onBlur?.();
            setFocused(false);
          }}
          onFocus={() => setFocused(true)}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <IconSymbol
              name="eye.fill"
              color={textColor}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

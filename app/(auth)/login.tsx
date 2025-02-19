import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedSafeAreaView } from "@/components/ThemeSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import { useForm, Controller } from "react-hook-form";
import ThemedButton from "@/components/ThemedButton";
import logo from "@/assets/images/logo-transp.png";
import FormField from "@/components/FormField";
const LoginScreen = () => {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <ThemedSafeAreaView className="h-full">
      <ScrollView>
        <ThemedView className="px-4 my-6 w-full h-full justify-center">
          <Image
            className="w-[80px] h-[80px] rounded-full bg-white"
            source={logo}
            resizeMode="contain"
          />

          <ThemedText type="subtitle" className="mt-10">Log into your YesWeLab account</ThemedText>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormField
                label="Email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                containerStyle="mt-7"
              />
            )}
            name="email"
          />
          {errors.email && <ThemedText>This is required.</ThemedText>}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormField
                label="Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
                onBlur={onBlur}
                containerStyle="mt-7 mb-7"
              />
            )}
            name="password"
          />
          {errors.password && <ThemedText>This is required.</ThemedText>}

          <ThemedButton title="Submit" handlePress={handleSubmit(onSubmit)} />
        </ThemedView>
      </ScrollView>
    </ThemedSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

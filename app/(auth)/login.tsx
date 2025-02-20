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
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";

const LoginScreen = () => {
  const textColor = useThemeColor({}, "text");
  const accentColor = useThemeColor({}, "accent");
  
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
  const onSubmit = (data: any) => {
    console.log(data);
    // TODO: Add login logic

    router.push("/home");
  }



  return (
    <ThemedSafeAreaView className="h-full">
      <ScrollView>
        <ThemedView className="px-4 my-6 w-full min-h-[85vh] justify-center">
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
                keyboardType="email-address"
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

          <ThemedButton title="Submit" handlePress={handleSubmit(onSubmit)} style={{ }} />

          <View className="flex-row items-center justify-center mt-7">
            <ThemedText>Dont have an account ? </ThemedText>
            <ThemedText style={[{ color: accentColor }]}>Sign up</ThemedText>
          </View>
        </ThemedView>
      </ScrollView>
    </ThemedSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

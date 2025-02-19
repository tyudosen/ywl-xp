import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ParallaxScrollView from "@/components/ParallaxScrollView";

const OrdersScreen = () => {
  return (
    <ParallaxScrollView
      headerImage={
        <Image source={require("@/assets/images/partial-react-logo.png")} />
      }
      headerBackgroundColor={{ dark: "#000", light: "#fff" }}
      
    >
      <View className="flex-1 items-center justify-center">
        <Text>Orders</Text>
      </View>
    </ParallaxScrollView>
  );
};

export default OrdersScreen;

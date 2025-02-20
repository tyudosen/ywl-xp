import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedSafeAreaView } from "@/components/ThemeSafeAreaView";
import { router } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import { formatDistanceToNow } from "date-fns";
import { LogoImage } from "@/constants/Constants";

const OrdersScreen = () => {
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState([
    { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false },
  ]);

  const primaryTextColor = useThemeColor({}, "text");
  const secondaryTextColor = useThemeColor({}, "secondary");
  const borderColor = useThemeColor({}, "border");
  const backgroundColor = useThemeColor({}, "background");
  const cardColor = useThemeColor({}, "card");

  const ListHeader = () => (
    <ThemedView>
      <ThemedView className="my-6 px-4 space-y-6">
        <ThemedView className="flex-row items-center justify-between">
          <ThemedView>
            <ThemedText style={{ color: primaryTextColor }} type="title">
              Orders
            </ThemedText>
          </ThemedView>

          <ThemedView>
            <Image
              source={LogoImage}
              className="w-[100px] h-[100px] rounded-full bg-white"
            />
          </ThemedView>
        </ThemedView>
        <ThemedView className="flex-row items-center justify-between pt-5 pb-4">
          <TouchableOpacity
            style={{ backgroundColor: secondaryTextColor }}
            className="border-2 border-gray-300 rounded-2xl p-4 mb-4"
          >
            <ThemedText>Recent orders</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: secondaryTextColor }}
            className="border-2 border-gray-300 rounded-2xl p-4 mb-4"
          >
            <ThemedText>All orders</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: secondaryTextColor }}
            className="border-2 border-gray-300 rounded-2xl p-4 mb-4"
          >
            <ThemedText>Pending orders</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );

  const ordersData = [
    {
      id: "1",
      orderNumber: "Order 1",
      orderDate: "2024-01-01",
      orderStatus: "Pending",
    },
    {
      id: "2",
      orderNumber: "Order 2",
      orderDate: "2024-01-02",
      orderStatus: "Completed",
    },
    {
      id: "3",
      orderNumber: "Order 3",
      orderDate: "2024-01-03",
      orderStatus: "Cancelled",
    },
    {
      id: "4",
      orderNumber: "Order 4",
      orderDate: "2024-01-04",
      orderStatus: "Pending",
    },
    {
      id: "5",
      orderNumber: "Order 5",
      orderDate: "2024-01-05",
      orderStatus: "Completed",
    },
  ];

  return (
    <ThemedSafeAreaView className="flex-1">
      <ThemedView className="flex-1">
        <FlatList
          data={ordersData}
          keyExtractor={(item) => item.id}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={ListHeader}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className="flex-col mb-4"
              onPress={() =>
                setIsOrderDetailsVisible({
                  ...isOrderDetailsVisible,
                  [index]: !isOrderDetailsVisible[index],
                })
              }
            >
              <ThemedView
                style={[
                  {
                    borderColor,
                    backgroundColor: cardColor,
                    borderBottomLeftRadius: isOrderDetailsVisible[index]
                      ? 0
                      : 16,
                    borderBottomRightRadius: isOrderDetailsVisible[index]
                      ? 0
                      : 16,
                  },
                ]}
                className="border-2 p-4 flex-row items-center justify-between rounded-t-2xl"
              >
                <ThemedText>{item.orderNumber}</ThemedText>
                <ThemedText>
                  {formatDistanceToNow(new Date(item.orderDate), {
                    addSuffix: true,
                  })}
                </ThemedText>
                <ThemedText>{item.orderStatus}</ThemedText>
              </ThemedView>

              {isOrderDetailsVisible[index] && (
                <ThemedView
                  style={[{ borderColor, backgroundColor: cardColor }]}
                  className="w-full border-2 overflow-hidden"
                >
                  <ThemedText className="text-center p-4">
                    Order Details
                  </ThemedText>
                  <ThemedView
                    style={{ backgroundColor: cardColor }}
                    className="space-y-2 px-4"
                  >
                    <ThemedView
                      style={{ backgroundColor: cardColor }}
                      className="flex-row items-center justify-between pb-4"
                    >
                      <ThemedText>Service(s):</ThemedText>
                      <ThemedText>Development, Scanning, Printing</ThemedText>
                    </ThemedView>
                    <ThemedView
                      style={{ backgroundColor: cardColor }}
                      className="flex-row items-center justify-between pb-4"
                    >
                      <ThemedText>Number of rolls:</ThemedText>
                      <ThemedText>1</ThemedText>
                    </ThemedView>
                    <ThemedView
                      style={{ backgroundColor: cardColor }}
                      className="flex-row items-center justify-between pb-4"
                    >
                      <ThemedText>Total amount:</ThemedText>
                      <ThemedText>$100</ThemedText>
                    </ThemedView>
                  </ThemedView>
                </ThemedView>
              )}
            </TouchableOpacity>
          )}
        />
      </ThemedView>
    </ThemedSafeAreaView>
  );
};

export default OrdersScreen;

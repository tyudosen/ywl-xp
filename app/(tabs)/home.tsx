import { StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedSafeAreaView } from "@/components/ThemeSafeAreaView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { formatDistanceToNow } from "date-fns";
import { useCallback, useState } from "react";
import { router } from "expo-router";
import { LogoImage, primaryTextColor, secondaryColor } from "@/constants/Constants";
import ListHeader from "@/components/ListHeader";

const ListHeader = () => {
  return (
    <ThemedView>
      <ThemedView className="my-6 px-4 space-y-6">
        <ThemedView className="flex-row items-center justify-between">
          <ThemedView>
            <ThemedText style={{ color: primaryTextColor }} type="title">
              Hi Marco
            </ThemedText>
            <ThemedText style={{ color: secondaryColor }} type="subtitle">
              welcome back
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
          <ThemedText type="subtitle">Your recent orders</ThemedText>
          <TouchableOpacity onPress={() => router.push("/orders")}>
            <ThemedText type="link">View all</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  )
}

export default function HomeScreen() {
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState([
    { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false },
  ]);
  const primaryTextColor = useThemeColor({}, "text");
  const secondaryTextColor = useThemeColor({}, "secondary");
  const borderColor = useThemeColor({}, "border");
  const backgroundColor = useThemeColor({}, "background");
  const cardColor = useThemeColor({}, "card");
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

  const renderOrderItem = useCallback(({ item, index }) => (
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
    </TouchableOpacity>), [])

  return (
    <ThemedSafeAreaView className="flex-1">
      <ThemedView style={[styles.container, { backgroundColor }]}>
        <FlatList
          data={ordersData}
          keyExtractor={(item) => item.id}
          renderItem={renderOrderItem}
          ListHeaderComponent={ListHeader}
          contentContainerStyle={styles.flatListContent}
        />
      </ThemedView>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

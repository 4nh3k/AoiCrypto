import CustomDropdown from "@/components/Inputs/Dropdown/CustomDropdown";
import Searchbar from "@/components/Inputs/Searchbar/Searchbar";
import SearchProject from "@/components/Items/Project/SearchProject";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { Shadow } from "react-native-shadow-2";

const HistorySegment = () => {
  const router = useRouter();

  const handleProjectNavigation = (e) => {
    router.navigate("/project/1");
  };

  const searchValues = [
    { label: "Show 2 results", value: 2 },
    { label: "Show 5 results", value: 5 },
    { label: "Show 10 results", value: 10 },
  ];

  return (
    <View>
      <View className="w-full pt-4 mb-4">
        <Searchbar placeholder="Search project" />
      </View>
      <View className="flex flex-col mb-4">
        <View className="flex flex-row justify-end mb-4">
          <CustomDropdown
            placeholder="Number of results "
            width={"100%"}
            data={searchValues}
          />
        </View>
        <Shadow
          stretch={true}
          offset={[0, 1]}
          startColor={"#2F66F61F"}
          distance={2}
          containerStyle={{ overflow: "visible", marginBottom: 8 }}
          style={{ borderRadius: 8 }}
        >
          <View className="flex flex-row bg-surface justify-between px-2 py-2 rounded-lg">
            <Text className="font-readexRegular text-[12px] w-[88px]">
              Project name
            </Text>
            <Text className="font-readexRegular text-[12px] w-[74px]">
              Contribution
            </Text>
            <Text className="font-readexRegular text-[12px] w-[56px]">
              Ended in
            </Text>
            <Text className="font-readexRegular text-[12px] ">ATH</Text>
          </View>
        </Shadow>
        {Array.from({ length: 8 }).map((_, index) => (
          <Pressable
            key={index}
            className="mb-2"
            onPress={handleProjectNavigation}
          >
            <SearchProject />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default HistorySegment;
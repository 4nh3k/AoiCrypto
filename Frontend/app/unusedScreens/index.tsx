// Import
import NormalButton from "@/components/Buttons/NormalButton/NormalButton";
import LoadingModal from "@/components/Displays/Modal/LoadingModal";
import ProjectCard from "@/components/Items/Project/ProjectCard";
import XProject from "@/components/Items/Project/XProject";
import { colors } from "@/constants/colors";
import { AuthContext } from "@/contexts/AuthProvider";
import { sampleCreateNewERC20Input } from "@/contracts/types/ERC20/CreateNewERC20Input";
import { useCreateNewERC20 } from "@/hooks/smart-contract/AoiERC20/useCreateNewERC20";
import { showToast } from "@/utils/toast";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { TransactionReceipt } from "viem";
// Import

export default function HomeScreen() {
  const banner = require("@/assets/logos/Kima.png");

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading((loading) => false);
  }, []);

  const { chainId, address, isConnected } = useContext(AuthContext);

  if (loading) {
    return (
      <View className="flex flex-col flex-1 items-center justify-center my-auto bg-background">
        <ActivityIndicator size="large" color={colors.primary} />
        <Text className="font-readexRegular text-primary text-md">Loading</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex flex-col px-4 bg-background">
      <View className="rounded-2xl mt-4">
        <View className="w-full rounded-2xl h-fit">
          <Image
            source={banner}
            style={{
              flex: 1,
              width: "100%",
              height: 112,
              borderRadius: 16,
            }}
          />
        </View>
      </View>

      <View className="flex flex-col mt-4">
        <View className="flex flex-row justify-between mb-1">
          <Text className="text-textColor text-md font-readexBold">
            Upcoming Projects
          </Text>
          <Pressable>
            <Text className="text-md font-readexSemiBold text-primary">
              More
            </Text>
          </Pressable>
        </View>
        <View className="flex flex-row space-x-2">
          <View className="flex-1 overflow-visible">
            <ProjectCard isInProgress={true} isPrivateSale={false} />
          </View>
          <View className="flex-1 overflow-visible">
            <ProjectCard isInProgress={false} isPrivateSale={false} />
          </View>
        </View>
        <View className="flex flex-col mt-4 mb-2">
          <View className="flex flex-row justify-between mb-1">
            <Text className="text-textColor text-md font-readexBold">
              Funded Projects
            </Text>
            <Pressable>
              <Text className="text-md font-readexSemiBold text-primary">
                More
              </Text>
            </Pressable>
          </View>
          <View className="flex flex-col">
            <Pressable className="mb-2">
              <XProject />
            </Pressable>
            <Pressable className="mb-2">
              <XProject />
            </Pressable>
            <Pressable className="mb-2">
              <XProject />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

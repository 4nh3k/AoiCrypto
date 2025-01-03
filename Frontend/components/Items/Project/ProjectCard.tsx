import { colors } from "@/constants/colors";
import { BIGINT_CONVERSION_FACTOR } from "@/constants/conversion";
import getABI from "@/contracts/utils/getAbi.util";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { useReadContracts } from "wagmi";

interface ProjectCardProps {
  isInProgress: boolean;
  isPrivateSale: boolean;
  softCap: number;
  pricePerToken: number;
  raisedAmount: number;
  tokenAddress: `0x${string}`;
  poolId: string;
  isSeller?: boolean;
  startTime: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  isInProgress = true,
  isPrivateSale = false,
  softCap = 1,
  pricePerToken = 0,
  raisedAmount = 0,
  isSeller = false,
  ...props
}) => {
  const projectIllust = require("@/assets/images/ProjectIllust.png");
  const projectLogo = require("@/assets/images/ProjectLogo.png");

  const router = useRouter();

  // console.log(props.poolId);

  const handleNavigateProjectDetail = (e) => {
    router.push({
      pathname: "/project/1",
      params: { poolId: props.poolId },
    });
  };

  const handleNavigateSellerProjectDetail = (e) => {
    router.push({
      pathname: "/project/sellerProjectDetail",
      params: { poolId: props.poolId },
    });
  };

  const handleNavigation = isSeller
    ? handleNavigateSellerProjectDetail
    : handleNavigateProjectDetail;

  const tokenContract = {
    address: props.tokenAddress,
    abi: getABI("AoiERC20"),
  } as const;

  const { data: token } = useReadContracts({
    contracts: [
      {
        ...tokenContract,
        functionName: "name",
      },
      {
        ...tokenContract,
        functionName: "symbol",
      },
    ],
  });

  const [name, symbol] = token?.map((token) => token.result) || ["Loading..."];

  if (isInProgress)
    return (
      <Pressable onPress={handleNavigation}>
        <View
          className="flex flex-col bg-surface rounded-sm overflow-hidden border-border border-[0.5px] h-[256px]"
          style={{ elevation: 1 }}
        >
          <View className="w-full relative">
            <ImageBackground
              source={projectIllust}
              className="w-full h-[100px] rounded-lg"
            />
            <View className="w-[22px] h-[22px] border border-white rounded-[10px] items-center justify-center absolute bottom-[-10px] left-[10px]">
              <Image source={projectLogo} className="w-5 h-5" />
            </View>
          </View>
          <View className="flex flex-col mt-4 px-2 py-2">
            <View className="flex flex-row">
              <Text className="font-readexSemiBold text-md mb-1">
                {name?.toString()}{" "}
              </Text>
              <Text className="font-readexRegular text-md mb-1 text-secondary">
                (${symbol?.toString()})
              </Text>
            </View>
            <View className="flex flex-row gap-1 mb-2">
              <Text className="font-readexBold text-primary">{pricePerToken}{" ETH"}</Text>
              <Text className="font-readexRegular">/ token</Text>
            </View>
            <View className="flex flex-row gap-1 mb-2">
              <Text className="font-readexRegular text-secondary">Start from:</Text>
              <Text className="font-readexRegular">{props.startTime}</Text>
            </View>

            <Progress.Bar
              color={colors.primary}
              unfilledColor={"#EDF2F7"}
              progress={raisedAmount / softCap}
              width={null}
              borderWidth={0}
              height={6}
              borderRadius={6}
            />
            <View className="flex flex-row justify-between mt-2">
              <Text className="font-readexRegular">{raisedAmount} ETH </Text>
              <Text className="font-readexRegular">{softCap} ETH</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );

  return (
    <Pressable onPress={handleNavigateProjectDetail}>
      <View
        className="flex flex-col bg-surface rounded-lg overflow-hidden border-border border h-[224px]"
        style={{ elevation: 1 }}
      >
        <View className="w-full relative">
          <ImageBackground
            source={projectIllust}
            className="w-full h-[100px] rounded-lg"
          />
          <View className="w-[22px] h-[22px] border border-white rounded-[10px] items-center justify-center absolute bottom-[-10px] left-[10px]">
            <Image source={projectLogo} className="w-5 h-5" />
          </View>
        </View>
        <View className="flex flex-col justify-between mt-4 px-2 py-2">
          <Text className="font-readexSemiBold text-md mb-1">Highstreet</Text>

          <View className="flex flex-row gap-1 mb-2">
            <Text className="font-readexBold">TBA</Text>
            <Text className="font-readexRegular">per token</Text>
          </View>

          <View className="opacity-0">
            <Progress.Bar
              color={colors.primary}
              unfilledColor={"#EDF2F7"}
              progress={raisedAmount / softCap}
              width={null}
              borderWidth={0}
              height={6}
              borderRadius={6}
            />
          </View>

          <View className="flex flex-row justify-between mt-2">
            <Text className="font-readexRegular">ETH</Text>
            <Text className="font-readexRegular">ETH</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProjectCard;

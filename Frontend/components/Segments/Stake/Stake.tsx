import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import WarningCard from "@/components/Cards/WarningCard/WarningCard";
import React from "react";
import { Text, View } from "react-native";

function Stake() {
  return (
    <View>
      {" "}
      <View className="flex flex-col items-center">
        <Text className="text-center mt-4 text-blue-600 text-[32px] font-bold font-readexRegular leading-[38px]">
          0
        </Text>
        <Text className="text-center mt-1 text-blue-600 text-base font-bold font-readexRegular leading-none">
          0.00 AOIS
          <br />
        </Text>
        <Text className="text-center mb-1 text-blue-600 text-sm font-bold font-readexRegular leading-none">
          in wallet
        </Text>
        <PrimaryButton
          onPress={() => {
            console.log("test");
          }}
          content="Stake all"
        />
        <View className="mt-6">
          <WarningCard
            iconColor={"#d5e0fd"}
            content="Your staked AOIS will be locked for the entire staking period. Early
        withdrawals are not permitted, ensuring commitment and stability in the
        ecosystem."
          />
        </View>
      </View>
      <Text className="text-textColor text-md mt-3 font-readexBold">
        Upcoming Projects
      </Text>
      <View className="space-y-2 p-3 rounded-md mt-2 bg-white shadow">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-sm text-slate-900 font-readexRegular">
            AOIs Power Tier
          </Text>
          <Text className="text-sm text-slate-900 font-readexRegular">
            N/A{" "}
            <Text className="text-sm text-slate-500 font-readexRegular">
              {`(<1,000)`}
            </Text>
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-sm text-slate-900 font-readexRegular">
            Lottery Probability
          </Text>
          <Text className="text-sm text-slate-900 font-readexRegular">
            Not Eligible{" "}
            <Text className="text-sm text-slate-500 font-readexRegular">
              {`(<1,000)`}
            </Text>
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-sm text-slate-900 font-readexRegular">
            IDO Cooldown
          </Text>
          <Text className="text-sm text-slate-900 font-readexRegular">
            Not Eligible{" "}
            <Text className="text-sm text-slate-500 font-readexRegular">
              {`(<1,000)`}
            </Text>
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-sm text-slate-900 font-readexRegular">
            Lock-up Period
          </Text>
          <Text className="text-sm text-slate-900 font-readexRegular">
            7 days
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-sm text-slate-900 font-readexRegular">
            Total Staked{" "}
          </Text>
          <Text className="text-sm text-slate-900 font-readexRegular">
            0{" "}
            <Text className="text-sm text-slate-500 font-readexRegular">
              {`AOIS`}
            </Text>
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-sm text-slate-900 font-readexRegular">
            AOIS Power Gain{" "}
          </Text>
          <Text className="text-sm text-slate-900 font-readexRegular">
            0{" "}
            <Text className="text-sm text-slate-500 font-readexRegular">
              {`AOIS POWER`}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Stake;

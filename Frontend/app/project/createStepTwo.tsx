import Back from "@/assets/icons/system-icons-svg/Back.svg";
import NormalButton from "@/components/Buttons/NormalButton/NormalButton";
import Input from "@/components/Inputs/Input/Input";
import Row from "@/components/Items/Project/Row";
import Container from "@/components/Layouts/Container";
import ScreenHeader from "@/components/Layouts/ScreenHeader";
import StepIndicatorComponent from "@/components/Navigations/StepIndicator/StepIndicator";
import { colors } from "@/constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const headerData = [
  {
    value: "Wallet Address",
    style: "font-readexBold text-sm",
  },
  {
    value: "Allocation",
    style: "font-readexBold text-sm",
  },
  {
    value: "Remarks",
    style: "font-readexBold text-sm",
  },
];
const rowData = [
  [
    {
      value: "EurjosAMMpk9V9ygMMxg3dpm3GQA6qXFP2cjH4wsMudf",
      style: "font-readexRegular text-sm",
    },
    {
      value: "2500 ETH",
      style: "font-readexRegular text-sm",
    },
    {
      value: "Early Bird Investor",
      style: "font-readexRegular text-sm text-error",
    },
  ],
  [
    {
      value: "EurjosAMMpk9V9ygMMxg3dpm3GQA6qXFP2cjH4wsMudf",
      style: "font-readexRegular text-sm",
    },
    {
      value: "2500 ETH",
      style: "font-readexRegular text-sm",
    },
    {
      value: "Early Bird Investor",
      style: "font-readexRegular text-sm text-error",
    },
  ],
  [
    {
      value: "EurjosAMMpk9V9ygMMxg3dpm3GQA6qXFP2cjH4wsMudf",
      style: "font-readexRegular text-sm",
    },
    {
      value: "2500 ETH",
      style: "font-readexRegular text-sm",
    },
    {
      value: "Early Bird Investor",
      style: "font-readexRegular text-sm text-error",
    },
  ],
];

function createStepTwo() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background">
      <ScreenHeader
        LeftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
            <Back stroke={colors.secondary} width={24} height={24} />
          </TouchableOpacity>
        }
        CenterComponent={
          <View className="w-[240px] h-[24px] mb-2">
            <StepIndicatorComponent
              mode={"horizontal"}
              labels={["", "", ""]}
              currentPosition={1}
            />
          </View>
        }
        RightComponent={<Back stroke={"#ffffff"} width={24} height={24} />}
      />

      <View className="flex flex-col p-4">
        <View className="mt-2">
          <Container>
            <View
              className="bg-surface rounded-lg px-4 py-2 flex flex-col border-border border-[0.5px]"
              style={{ elevation: 2 }}
            >
              <Text className="font-readexBold text-md text-primary mb-2">
                Sale Configuration
              </Text>
              <View className="mb-3">
                <Input label={"Start time"} type="datetime" />
              </View>
              <View className="mb-3">
                <Input label={"End time"} type="datetime" />
              </View>
              <View className="mb-3">
                <Input
                  label={"Initial Sale Type"}
                  type="datetime"
                  placeholder="Start public sale"
                />
              </View>
            </View>
          </Container>
        </View>

        <View className="mt-4">
          <Container>
            <View
              className="bg-surface rounded-lg px-4 py-2 flex flex-col border-border border-[0.5px]"
              style={{ elevation: 2 }}
            >
              <Text className="font-readexBold text-md text-primary mb-2">
                Whitelist Upload
              </Text>
              <NormalButton
                content={"Import Whiltelist from file"}
                onClick={function (): void {}}
              />
              <FlatList
                style={{
                  paddingHorizontal: 0,
                  borderColor: colors.border,
                  borderWidth: 0.5,
                  elevation: 1,
                  marginTop: 12,
                  marginBottom: 5,
                }}
                contentContainerStyle={{ flexGrow: 1, gap: 0 }}
                data={[headerData, ...rowData]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {
                  return (
                    <View>
                      <Row key={item.index} contents={item.item} />
                    </View>
                  );
                }}
              />
            </View>
          </Container>
        </View>

        <View className="mt-4 flex-row justify-between">
          <View className="w-[48%]">
            <NormalButton content={"Back"} onClick={function (): void {}} />
          </View>
          <View className="w-[48%]">
            <NormalButton
              content={"Go to next step"}
              onClick={() => router.push("/project/createStepThree")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default createStepTwo;

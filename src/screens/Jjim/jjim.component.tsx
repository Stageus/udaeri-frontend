import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks/index.hooks";
import { useNavigation } from "@react-navigation/native";
import HeaderBar from "../../components/HeaderBar/HeaderBar.component";
import SafeAreaViewComp from "../../components/safeAreaViewComp/safeAreaViewComp";
import { JjimEmptyContainer } from "./Jjim.style";
import { ScrollView } from "react-native-gesture-handler";
import { setCurStore } from "../../store/slice/curStateSlice";
import StoreEle from "../../components/StoreEle/StoreEle.component";

const Jjim = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const jjimList = useAppSelector((state) => state.userReducer.jjimStore);

  return (
    <SafeAreaViewComp>
      <View>
        <HeaderBar title="찜 목록" left={false} center={false} right={false} />
        {jjimList && jjimList.length === 0 ? (
          <JjimEmptyContainer>
            <Text>찜한 가게가 없습니다</Text>
          </JjimEmptyContainer>
        ) : (
          <ScrollView>
            {jjimList.map((item, index) => {
              return (
                <StoreEle key={index} storeName={item.store_name}></StoreEle>
              );
            })}
          </ScrollView>
        )}
      </View>
    </SafeAreaViewComp>
  );
};

export default Jjim;

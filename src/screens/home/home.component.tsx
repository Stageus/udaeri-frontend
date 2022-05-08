import React from "react";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";

// import {useAppDispatch, useAppSelector} from '../../../store/hooks';
// import {ageCounter, nameChange} from '../../../store/slice/userSlice';
import { HomeText } from "./home.style";
import { LongBtn } from "../../components/longBtn/longBtn.component";
import { HomeJjimEle } from "../../components/home-jjimEle/home-jjimEle.component";
import { SafeAreaViewComp } from "../../components/safeAreaViewComp/safeAreaViewComp";

const Home = (): JSX.Element => {
  return (
    <SafeAreaViewComp>
      <View>
        <HomeText>홈!!</HomeText>
        <LongBtn btnTitle="지도로 보기" pageTitle="Map" />
        <HomeJjimEle></HomeJjimEle>
      </View>
    </SafeAreaViewComp>
  );
};

export default Home;

const Box = styled.View`
  width: 100px;
  height: 100px;
`;

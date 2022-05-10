import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import styled from "styled-components/native";

// import {useAppDispatch, useAppSelector} from '../../../store/hooks';
// import {ageCounter, nameChange} from '../../../store/slice/userSlice';
import { HomeText, HomeContainer, TopContainer, TopTitle } from "./home.style";
import { LongBtn } from "../../components/longBtn/longBtn.component";
import { HomeJjimEle } from "../../components/home-jjimEle/home-jjimEle.component";
import { SafeAreaViewComp } from "../../components/safeAreaViewComp/safeAreaViewComp";

const Home = (): JSX.Element => {
  return (
    <SafeAreaViewComp>
      <HomeContainer>
        <TopContainer>
          <TopTitle>우리대학 거리</TopTitle>
          <TopTitle main>인하대학교</TopTitle>
        </TopContainer>
        <HomeText>홈!!!~!~</HomeText>
        <LongBtn btnTitle="지도로 보기" pageTitle="Map" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: 15,
            flexDirection: "row",
          }}
        >
          <HomeJjimEle categoryTitle="음식점" shopName="맛사랑"></HomeJjimEle>
          <HomeJjimEle categoryTitle="음식점" shopName="맛사랑"></HomeJjimEle>
          <HomeJjimEle categoryTitle="음식점" shopName="맛사랑"></HomeJjimEle>
          <HomeJjimEle categoryTitle="음식점" shopName="맛사랑"></HomeJjimEle>
        </ScrollView>
      </HomeContainer>
    </SafeAreaViewComp>
  );
};

export default Home;

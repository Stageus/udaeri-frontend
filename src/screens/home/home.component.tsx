import React, { useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";

// import {useAppDispatch, useAppSelector} from '../../../store/hooks';
// import {ageCounter, nameChange} from '../../../store/slice/userSlice';
import { 
  Container,
  Header,
  MiddleBlock
} from "./Home.style";
import { LongBtn } from "../../components/longBtn/longBtn.component";
import { HomeJjimEle } from "../../components/home-jjimEle/home-jjimEle.component";
import { SafeAreaViewComp } from "../../components/safeAreaViewComp/safeAreaViewComp";
import { ScrollView } from "react-native-gesture-handler";
import LargeCatEle from "../../components/LargeCatEle/LargeCatEle.component";
import MagniBtn from "../../components/HeaderBar/MagniBtn/MagniBtn.component";

const categoryList = [
  {
    name: "먹거리"
  },
  {
    name: "놀거리"
  },
  {
    name: "카페/빵집"
  },
  {
    name: "술집"
  },
  {
    name: "서비스"
  },
  {
    name: "상점"
  },
  {
    name: "미용실"
  },
  {
    name: "병원"
  },
]

const Home = (): JSX.Element => {
  return (
    <SafeAreaViewComp>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Container>
            <Header.Container>
              <Header.LogoText>우리대학거리</Header.LogoText>
              <MagniBtn title={null} size={36}></MagniBtn>
            </Header.Container>
            <MiddleBlock.Container>
              <MiddleBlock.CatWrap>
                {categoryList.map((item, index) => {
                  return(
                    <LargeCatEle
                        key={index}
                        name={item.name}
                    ></LargeCatEle>
                )})}
              </MiddleBlock.CatWrap>
              <LongBtn btnTitle="지도로 보기" pageTitle="Map" />
            </MiddleBlock.Container>
            
            <HomeJjimEle></HomeJjimEle>
          </Container>
        </ScrollView>
    </SafeAreaViewComp>
  );
};

export default Home;

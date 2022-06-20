import React, { useState, useEffect } from "react";

import { Container, Header, MiddleBlock } from "./Home.style";
import { LongBtn } from "../../components/longBtn/longBtn.component";
import { HomeJjimEle } from "../../components/home-jjimEle/home-jjimEle.component";
import SafeAreaViewComp from "../../components/safeAreaViewComp/safeAreaViewComp";
import { ScrollView } from "react-native-gesture-handler";
import LargeCatEle from "../../components/LargeCatEle/LargeCatEle.component";
import { useAppDispatch, useAppSelector } from "../../hooks/index.hooks";
import {
  FoodIcon,
  SalonIcon,
  HospitalIcon,
  CafeIcon,
  BeerIcon,
  ShopIcon,
  ServiceIcon,
  PlayIcon,
} from "../../assets/icon/icons";
import { getLargeCategory } from "../../store/slice/categorySlice";

const categoryList = [
  {
    name: "먹거리",
    icon: FoodIcon,
  },
  {
    name: "놀거리",
    icon: PlayIcon,
  },
  {
    name: "카페/빵집",
    icon: CafeIcon,
  },
  {
    name: "술집",
    icon: BeerIcon,
  },
  {
    name: "서비스",
    icon: ServiceIcon,
  },
  {
    name: "상점",
    icon: ShopIcon,
  },
  {
    name: "미용실",
    icon: SalonIcon,
  },
  {
    name: "병원",
    icon: HospitalIcon,
  },
];

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchLargeCategory = async () => {
      await dispatch(getLargeCategory());
    };
    fetchLargeCategory();
  }, []);

  return (
    <SafeAreaViewComp>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Container>
          <Header.Container>
            <Header.LogoText>우리대학거리</Header.LogoText>
            <Header.UnivText>인하대학교</Header.UnivText>
          </Header.Container>
          <MiddleBlock.Container>
            <MiddleBlock.CatWrap>
              {categoryList.map((item, index) => {
                return (
                  <LargeCatEle
                    key={index}
                    name={item.name}
                    icon={item.icon}
                  ></LargeCatEle>
                );
              })}
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

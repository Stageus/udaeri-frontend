import React, { useEffect, useState } from "react";
import { SafeAreaViewComp } from "../../components/safeAreaViewComp/safeAreaViewComp";
import HeaderBar from "../../components/HeaderBar/HeaderBar.component";
import { View, ScrollView } from "react-native";
import { MainContainer } from "./MiddleCat.style";
import axios from "axios";
import MidCatEle from "../../components/MiddleCatEle/MiddleCatEle.component";
import { useAppSelector, useAppDispatch } from "../../hooks/index.hooks";
import { setMidCat } from "../../store/slice/categorySlice";

const MiddleCat = ({ route }): JSX.Element => {
  const dispatch = useAppDispatch();
  const midCatList = useAppSelector(
    (state) => state.categoryReducer.midCatList
  );

  useEffect(() => {
    getMidCat();
  }, []);

  const getMidCat = async () => {
    // 중분류 가져오는 함수
    await axios
      .get(`/l-categories/${route.params.catName}/m-categories`)
      .then((res) => {
        dispatch(setMidCat(res.data.list));
      })
      .catch((err) => {
        console.log("server로 access code post 실패");
        console.log(err);
      });
  };

  return (
    <SafeAreaViewComp>
      <View>
        <HeaderBar
          title={route.params.catName}
          left={true}
          center={false}
          right={null}
        ></HeaderBar>
        <MainContainer>
          <ScrollView>
            {midCatList.map((item, index) => {
              return <MidCatEle key={index} name={item.name} />;
            })}
          </ScrollView>
        </MainContainer>
      </View>
    </SafeAreaViewComp>
  );
};

export default MiddleCat;

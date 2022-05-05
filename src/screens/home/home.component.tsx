import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

// import {useAppDispatch, useAppSelector} from '../../../store/hooks';
// import {ageCounter, nameChange} from '../../../store/slice/userSlice';
import { HomeText } from "./home.style";
import { HomeIcon } from "../../assets/icon/icons";
import { SvgXml } from "react-native-svg";
import { LongBtn } from "../../components/longBtn/longBtn.component";

const Home = (): JSX.Element => {
  return (
    <SafeAreaView>
      <HomeText>홈</HomeText>
      <Box>
        <SvgXml xml={HomeIcon} width="100%" height="100%" fill="#000000" />
      </Box>
      <LongBtn btnTitle="지도로 보기" pageTitle="Map" />
    </SafeAreaView>
  );
};

export default Home;

const Box = styled.View`
  width: 100px;
  height: 100px;
`;

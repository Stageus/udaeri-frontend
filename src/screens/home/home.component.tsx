import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

// import {useAppDispatch, useAppSelector} from '../../../store/hooks';
// import {ageCounter, nameChange} from '../../../store/slice/userSlice';

import { Text } from 'react-native-svg';

import { HomeText } from './home.style';
import { HomeIcon } from '../../assets/icon/icons';
import { SvgXml } from 'react-native-svg';

const Home = (): JSX.Element => {
  return (
    <SafeAreaView>
      <HomeText>홈</HomeText>
      <Box>
        <SvgXml xml={HomeIcon} width="100%" height="100%" fill="#000000" />
      </Box>
    </SafeAreaView>
  );
};

export default Home;

const Box = styled.View`
  width: 100px;
  height: 100px;
`;

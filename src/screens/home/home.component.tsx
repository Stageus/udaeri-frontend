import React from 'react';
import {SafeAreaView} from 'react-native';

// import {useAppDispatch, useAppSelector} from '../../../store/hooks';
// import {ageCounter, nameChange} from '../../../store/slice/userSlice';

import {HomeText} from './home.style';

const Home = (): JSX.Element => {
  return (
    <SafeAreaView>
      <HomeText>홈</HomeText>
    </SafeAreaView>
  );
};

export default Home;

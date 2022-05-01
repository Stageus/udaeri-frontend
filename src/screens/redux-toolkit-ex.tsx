import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {ageCounter, nameChange} from '../../store/slice/userSlice';

const ReduxToolkitEx = (): JSX.Element => {
  const userInfo = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  const ageIncrease = () => {
    dispatch(ageCounter());
  };

  const nameHandler = () => {
    dispatch(nameChange('하하하'));
  };

  return (
    <SafeAreaView>
      <SC.text>Redux toolkit 예시</SC.text>
      <Text>내 나이: {userInfo.age}</Text>
      <TouchableOpacity onPress={ageIncrease}>
        <Text>나이 증가</Text>
      </TouchableOpacity>
      <Text>내 이름: {userInfo.name}</Text>
      <TouchableOpacity onPress={nameHandler}>
        <Text>이름 변경</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const SC = {
  text: styled.Text`
    font-size: 30px;
  `,
};

export default ReduxToolkitEx;

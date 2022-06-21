import React, { useState, useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../hooks/index.hooks";
import { setUserNickname, checkSponsor } from "../../store/slice/userSlice";
import { getLargeCategory } from "../../store/slice/categorySlice";
import { setJJimstore } from "../../store/slice/userSlice";

const LoadingPage = () => {
  const dispatch = useAppDispatch();

  const fetchUserInfo = useCallback(async () => {
    const response = await axios.get("/users");
    if (response.data.success) {
      dispatch(setUserNickname(response.data.nickname));
      dispatch(checkSponsor(response.data.sponsor));
    } else {
      console.log(response.data.message);
    }
  }, []);

  const fetchLargeCategory = useCallback(async () => {
    await dispatch(getLargeCategory());
  }, []);

  const fetchJjimList = useCallback(async () => {
    const response = await axios.get("users/favorites");

    if (response.data.success) {
      dispatch(setJJimstore(response.data.list));
    } else {
      console.log(response.data.message);
    }
  }, []);

  useEffect(() => {
    fetchUserInfo();
    fetchLargeCategory();
    fetchJjimList();
  }, []);

  return (
    <View>
      <Text>로딩화면~</Text>
    </View>
  );
};

export default LoadingPage;

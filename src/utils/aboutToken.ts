import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TOKEN_KEY = "@userKey";

export const saveToken = async (token: string) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const getToken = async () => {
  let token;

  useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY, (err, result) => {
      token = result;
    });
  });

  return token;
};

export const expireToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

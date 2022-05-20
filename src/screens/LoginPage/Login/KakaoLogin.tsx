import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import styled, { css } from "styled-components/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { checkToken } from "../../../../../reducer/index";

const KakaoLogin = () => {
  const dispatch = useDispatch();

  const url = useSelector((state) => state.url);

  const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

  const restApiKey = "4b3275856f1b44d19fbb0efca13d5b69";

  // access code를 substring해서 server에 post요청하는 함수 실행
  const LoginProgress = (data) => {
    const startStr = "code=";
    let startIdx = data.indexOf(startStr);
    if (startIdx != -1) {
      let access_code = data.substring(startIdx + startStr.length);
      PostAccessCode(access_code);
    }
  };

  // asyncStorage에 token저장하는 함수
  const TOKEN_KEY = "@userKey";
  const saveToken = async (token) => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  };

  // server에 access code를 post하고 token받아서 asyncStorage랑 redux에 token저장
  const PostAccessCode = async (access_code) => {
    axios
      .post("/oauth/", {
        code: access_code,
        platform: "kakao",
      })
      .then((res) => {
        console.log("access token post 성공");
        saveToken(res.data.token);
        dispatch(checkToken(true));
      })
      .catch((err) => {
        console.log(access_code);
        console.log("server로 access code post 실패");
        console.log(err);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        scalesPageToFit={false}
        style={{ marginTop: 30 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${restApiKey}&redirect_uri=${url}/kakao/callback`,
        }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        onMessage={(event) => {
          LoginProgress(event.nativeEvent["url"]);
        }}
      ></WebView>
    </View>
  );
};

export default KakaoLogin;

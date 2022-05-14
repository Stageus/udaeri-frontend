import React, { useState, useEffect } from "react";
import { View, StatusBar, Platform } from "react-native";
import { WebView } from "react-native-webview";
import styled, { css } from "styled-components/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { restoreExpiredTime, checkToken } from "../../../../../reducer/index";

const StatusBarHeight = StatusBar.currentHeight;
const SC = {
  Container: styled.View`
    ${Platform.OS === "android"
      ? css`
          padding-top: ${StatusBarHeight + 15}px;
        `
      : undefined};
  `,
};

const NaverLogin = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.url);
  axios.defaults.baseURL = url;

  const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

  const client_id = "AAdPC0BBWgoUkyk4otS2";
  const [randomState, setRandomState] = useState();

  const getState = async () => {
    await axios.get("/state/").then((res) => {
      setRandomState(res.data.state);
      console.log("state 가져옴 : ", randomState);
    });
  };

  useEffect(() => {
    const getState = () => {
      axios
        .get("/state/")
        .then((res) => {
          setRandomState(res.data.state);
        })
        .catch((err) => {
          console.log("state 받아오기 error");
        });
    };
    getState();
  }, []);

  const expiredTime = useSelector((state) => state.tokenExpiredTime);
  // access code를 substring해서 server에 post요청하는 함수 실행
  const LoginProgress = (data) => {
    const startStr = "code=";
    const endStr = "&state";
    let startIdx = data.indexOf(startStr);
    let endIdx = data.indexOf(endStr);
    if (startIdx != -1) {
      let access_code = data.substring(startIdx + startStr.length, endIdx);
      PostAccessCode(access_code);
      // setTimeout(() => {
      //   renewalToken();
      // }, expiredTime);
    }
  };

  // asyncStorage에 token저장하는 함수
  const TOKEN_KEY = "@userKey";
  const saveToken = async (token) => {
    AsyncStorage.setItem(TOKEN_KEY, token);
  };

  // asyncStorage에 refresh token 저장하는 함수
  const REFRESH_TOKEN_KEY = "@refreshToken";
  const saveRefreshToken = async (token) => {
    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, token);
  };

  // server에 access code를 post하고 token받아서 asyncStorage랑 redux에 token저장
  const PostAccessCode = (access_code) => {
    axios
      .post("/oauth/", {
        code: access_code,
        state: randomState,
        platform: "naver",
      })
      .then((res) => {
        console.log("access token post 성공");
        saveToken(res.data.token);
        saveRefreshToken(res.data.refreshToken);
        dispatch(checkToken(true));
        // dispatch(restoreToken(res.data.token));
        dispatch(restoreExpiredTime(res.data.expires_in));
      })
      .catch((err) => {
        console.log("server로 access code post 실패");
        console.log(err);
      });
  };

  // const getToken = async () => {
  //   return await AsyncStorage.getItem(TOKEN_KEY);
  // };

  // const getRefreshToken = async () => {
  //   return await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
  // };

  // const renewalToken = async () => {
  //   axios
  //     .get("/newtoken/", {
  //       headers: {
  //         authorization: await getToken(),
  //         refreshToken: await getRefreshToken(),
  //       },
  //     })
  //     .then((res) => {
  //       dispatch(restoreToken(res.data.token));
  //       saveToken(res.data.token);
  //       dispatch(restoreExpiredTime(res.data.expires_in));
  //       console.log(res.data.message);
  //       setTimeout(() => {
  //         renewalToken();
  //       }, res.data.expires_in);
  //     })
  //     .catch((err) => {
  //       console.log("토큰 갱신 실패!");
  //       console.log(err);
  //     });
  // };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        scalesPageToFit={false}
        style={{ marginTop: StatusBarHeight }}
        source={{
          uri:
            "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" +
            client_id +
            "&redirect_uri=" +
            url +
            "/naver/callback&state=" +
            randomState,
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

export default NaverLogin;

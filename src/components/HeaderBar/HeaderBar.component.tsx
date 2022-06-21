import React from "react";
import axios from "axios";
import { View } from "react-native";
import { HeaderBarContainer, StoreName } from "./HeaderBar.style";
import BackBtn from "./BackBtn/BackBtn.component";
import MagniBtn from "./MagniBtn/MagniBtn.component";
import HeartBtn from "./HeartBtn/HeartBtn.component";
import { useAppSelector, useAppDispatch } from "../../hooks/index.hooks";
import { setJJimState } from "../../store/slice/curStateSlice";
import { addJjimStore, deleteJjimStore } from "../../store/slice/userSlice";
import { store } from "../../store/store";

interface Props {
  title: string;
  left?: boolean;
  center: boolean;
  right?: "magni" | "heart" | boolean;
}

const HeaderBar = ({ title, left, center, right }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  //const jjimList = useAppSelector((state) => state.userReducer.jjimStore);
  const jjimState = useAppSelector((state) => state.curStateReducer.jjimState);

  const jjimToggle = async (storeName) => {
    jjimState
      ? axios
          .delete("/users/favorites/", {
            headers: {
              "Content-Type": "application/json",
            },
            data: { store: storeName },
          })
          .then((res) => {
            res.data.success
              ? (dispatch(setJJimState(false)),
                dispatch(deleteJjimStore(storeName)),
                console.log("찜 삭제 성공"))
              : console.log(JSON.stringify(res.data) + "찜 삭제 실패");
          })
          .catch((err) => {
            console.log("찜 삭제 실패");
          })
      : axios
          .post(
            "/users/favorites/",
            {
              store: storeName,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            res.data.success
              ? (dispatch(setJJimState(true)),
                dispatch(
                  addJjimStore({
                    store_name: storeName,
                    l_category: res.data.l_category,
                  })
                ),
                console.log("찜 추가 성공"))
              : console.log("찜 추가 실패");
          })
          .catch((err) => {
            console.log("찜 추가 실패 이유: ", err);
          });
  };

  return (
    <HeaderBarContainer center={center}>
      {left ? <BackBtn /> : <View />}
      <StoreName>{title}</StoreName>
      {right === "magni" ? (
        <MagniBtn title={null} />
      ) : right === "heart" ? (
        <HeartBtn
          jjimState={jjimState}
          title=""
          onPress={() => jjimToggle(title)}
        />
      ) : (
        <View style={{ width: 24 }}></View>
      )}
    </HeaderBarContainer>
  );
};

export default HeaderBar;

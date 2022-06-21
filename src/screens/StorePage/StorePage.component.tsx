import React, { useEffect } from "react";

import SafeAreaViewComp from "../../components/safeAreaViewComp/safeAreaViewComp";
import HeaderBar from "../../components/HeaderBar/HeaderBar.component";
import { Container, Content } from "./StorePage.style";
import StoreTapNavigator from "../../navigation/StoreTabNavigator";
import { setJJimState } from "../../store/slice/curStateSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/index.hooks";

const StorePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const curStore = useAppSelector((state) => state.curStateReducer.curStore);
  const jjimList = useAppSelector((state) => state.userReducer.jjimStore);

  useEffect(() => {
    if (!jjimList) dispatch(setJJimState(false));
    else {
      for (let value of jjimList) {
        if (value["store_name"] === curStore) {
          dispatch(setJJimState(true));
          break;
        } else {
          dispatch(setJJimState(false));
        }
      }
    }
  }, []);

  return (
    <SafeAreaViewComp>
      <Container>
        <HeaderBar
          left={true}
          title={curStore}
          center={false}
          right="heart"
        ></HeaderBar>
        <Content>
          <StoreTapNavigator />
        </Content>
      </Container>
    </SafeAreaViewComp>
  );
};

export default StorePage;

import React from "react";
import { View } from "react-native";
import { HeaderBarContainer, StoreName } from './HeaderBar.style';
import BackBtn from "./BackBtn/BackBtn.component";
import MagniBtn from "./MagniBtn/MagniBtn.component";
import HeartBtn from "./HeartBtn/HeartBtn.component";

interface Props {
    left : boolean;
    center : boolean;
    right : 'magni' | 'heart';
}

const HeaderBar = ({left, center, right} : Props): JSX.Element => {
  return (
    <HeaderBarContainer center={center}>
      {left ? (
          <BackBtn />
      ) :
      (<View />)}
      <StoreName>헤더바</StoreName>
      {right === "magni" ? (
        <MagniBtn title={null} />
        ) : right === "heart" ? (
        <HeartBtn jjimState={true} title="" />
        ) : (
            <View style={{width: 24}}></View>
    )}
    </HeaderBarContainer>
  );
};


export default HeaderBar;
import React from "react";
import { View } from "react-native";
import { HeaderBarContainer, StoreName } from './HeaderBar.style';
import BackBtn from "./BackBtn/BackBtn.component";
import MagniBtn from "./MagniBtn/MagniBtn.component";
import HeartBtn from "./HeartBtn/HeartBtn.component";

interface Props {
    title : string;
    left : boolean;
    center : boolean;
    right : 'magni' | 'heart' | null;
}

const HeaderBar = ({title, left, center, right} : Props): JSX.Element => {
  return (
    <HeaderBarContainer center={center}>
      {left ? (
          <BackBtn />
      ) :
      (<View />)}
      <StoreName>{title}</StoreName>
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
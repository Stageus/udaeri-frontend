import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { useAppSelector } from "../../../../store/hooks";
import { Container, StoreName, StoreInfoText, StoreInfoTitle, StoreInfoWrap } from './StoreInfoTab.style'
import StoreInfoEle from "../../../components/StoreInfoEle/StoreInfoEle.component";

const StoreInfoTap = () => {
  const curLargeCat = useAppSelector(
    (state) => state.categoryReducer.curLargeCat
  );
  const curMidCat = useAppSelector((state) => state.categoryReducer.curMidCat);
  const curStore = useAppSelector((state) => state.curStateReducer.curStore);
  const [storeInfo, setStoreInfo] = useState({});
  const [initialRegion, setInitialRegion] = useState({});
    useEffect(() => {
        axios
          .get(
            "/l-categories/" +
              curLargeCat +
              "/m-categories/" +
              curMidCat +
              "/stores/" +
              curStore +
              "/information"
          )
          .then((res) => {
            // console.log("가게정보: " + JSON.stringify(res.data));
            setStoreInfo(res.data);
            // setCoordinate({
            //   latitude: res.data.latitude,
            //   longitude: res.data.longitude,
            // });
            // setInitialRegion({
            //   latitude: res.data.latitude + 0.001,
            //   longitude: res.data.longitude,
            //   latitudeDelta: 0.01,
            //   longitudeDelta: 0.01,
            // });
          })
          .catch((err) => {
            console.log("error");
            console.log(err);
          });
      }, []);
      
    return (
        <Container>
            <StoreName>{storeInfo.store}</StoreName>
            <StoreInfoEle infoTitle="전화번호" infoContent={storeInfo.call_number}> </StoreInfoEle>
            <StoreInfoEle 
              infoTitle="휴무일/영업시간"
              infoContent={
                storeInfo.day_off +
                " / " +
                storeInfo.opening_hours 
            }> </StoreInfoEle>
            <StoreInfoEle infoTitle="가격대" infoContent={storeInfo.prices}> </StoreInfoEle>
            <StoreInfoEle infoTitle="주소" infoContent={storeInfo.location} />
            <StoreInfoWrap>
                <StoreInfoTitle></StoreInfoTitle>
            </StoreInfoWrap>
        </Container>
    )

}

export default StoreInfoTap;

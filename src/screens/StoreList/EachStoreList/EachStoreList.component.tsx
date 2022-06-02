import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Flatlist } from "./EachStoreList.style";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import axios from "axios";
import StoreEle from "../../../components/StoreEle/StoreEle.component";
import { addStoreList } from '../../../../store/slice/categorySlice';

const StoreElement = ({ item }) => {
    return (
      <StoreEle
        storeName={item.store_name}
        content={item.main_menu}
        location={item.inha_location}
      />
    )
  }

interface Props {
  curMidCat : string;
}

const EachStoreList = ({ curMidCat } : Props) : JSX.Element => {
    const dispatch = useAppDispatch();

    const curLargeCat = useAppSelector((state) => state.categoryReducer.curLargeCat);
    const midCat = curMidCat;
    const storeList = useAppSelector((state) => state.categoryReducer.storeList);
    console.log(storeList[midCat])
    const [cnt, setCnt] = useState(1);

    useEffect(() => {
        loadStoreList();
    }, [])

    const loadStoreList = async () => {
        await axios
          .get("/l-categories/" + curLargeCat + "/m-categories/" + curMidCat + "/stores/" + cnt)
          .then((res) => {
            if (res.data.list !== null) {
              dispatch(addStoreList([curMidCat, res.data.list]));
              setCnt(cnt + 1);
              console.log(storeList)
            }
          })
          .catch((err) => {
            console.log("error");
            console.log(err);
          })
    }

    return (
        <Flatlist
            data={storeList[midCat]}
            renderItem={(item) => StoreElement(item)}
            keyExtractor={(item) => String(item.store_name)}
            onEndReachedThreshold={0.01}
            onEndReached={loadStoreList}
        >

        </Flatlist>
    )
}

export default EachStoreList;
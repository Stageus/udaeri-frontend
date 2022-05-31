import React, { useState } from "react";
import { View } from "react-native";
import { Flatlist } from "./EachStoreList.style";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import axios from "axios";
import StoreEle from "../../../components/StoreEle/StoreEle.component";
import { addCurStoreList } from '../../../../store/slice/categorySlice';

// const StoreElement = ({ item }) => {
//     return (
//       <StoreEle
//         storeName={item.store_name}
//         content={item.main_menu}
//         location={item.s_name}
//       />
//     )
//   }

// const EachStoreList = () : JSX.Element => {
//     const dispatch = useAppDispatch();

//     const curLargeCatList = useAppSelector((state) => state.categoryReducer.largeCatList);
//     const curMidCatList = useAppSelector((state) => state.categoryReducer.midCatList);
//     const curMidCat = useAppSelector((state) => state.categoryReducer.curMidCat);
//     const [cnt, setCnt] = useState(1);

//     const loadStoreList = () => {
//         axios
//           .get("/l-categories/" + curLargeCatList + "/m-categories/" + curMidCat + "/stores/" + cnt)
//           .then((res) => {
//             if (res.data.list !== null) {
//               dispatch(addCurStoreList([curMidCat, res.data.list]));
//               setCnt(cnt + 1);
//             }
//           })
//           .catch((err) => {
//             console.log("error");
//             console.log(err);
//           })
//     }

//     return (
//         <Flatlist
//             data={curMidCatList[curMidCat]}
//             renderItem={(item) => StoreElement(item)}
//             keyExtractor={(item) => String(item.store_name)}
//             onEndReachedThreshold={0.01}
//             onEndReached={loadStoreList}
//         >

//         </Flatlist>
//     )
// }

const EachStoreList =() :JSX.Element => {
    return (
        <View>

        </View>
    )
}

export default EachStoreList;
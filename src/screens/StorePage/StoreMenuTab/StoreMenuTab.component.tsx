import React, { useState, useEffect } from "react";
import { Container } from "./StoreMenuTab.style";
import { useAppSelector } from "../../../hooks/index.hooks";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import MenuEle from "../../../components/MenuEle/MenuEle.component";
const StoreMenuTab = ():JSX.Element => {
    type StoreMenu = {
        menu_name : string;
        brief_info : string;
        price : string;
    }
    const curLargeCat = useAppSelector((state) => state.categoryReducer.curLargeCat);
    const curMidCat = useAppSelector((state) => state.categoryReducer.curMidCat);
    const curStore = useAppSelector((state => state.curStateReducer.curStore));
    const [storeMenu, setStoreMenu] = useState([]);
    
    const getStore = async () => {
        await axios
          .get(
            "/l-categories/" +
              curLargeCat +
              "/m-categories/" +
              curMidCat +
              "/stores/" +
              curStore +
              "/menu"
          )
          .then((res) => {
            setStoreMenu(res.data.list);
          })
          .catch((err) => {
            console.log("error");
            console.log(err);
          });
    };

    useEffect(() => {    
          getStore();
    }, []);

    return (
        <Container>
            <ScrollView>
            {storeMenu &&
                storeMenu.map(({menu_name, brief_info, price}, index) => {
                    return (
                        <MenuEle
                            key={index}
                            menuName={menu_name}
                            menuDes={brief_info}
                            menuPrice={price}
                        />
                    );
            })}
            </ScrollView>
        </Container>
    )
}
export default StoreMenuTab;
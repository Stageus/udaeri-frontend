import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../../hooks/index.hooks";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ModalBackground, ModalView, OptionText, OptionTouch} from "./ReviewOptionModal.style";
import { Modal } from "react-native";

interface Props {
    setReload : Dispatch<SetStateAction<boolean>>;
    isMyReview : boolean;
    modalVisible : boolean;
    setModalVisible : Dispatch<SetStateAction<boolean>>;
}

const ReviewOptionModal = ({ setReload, isMyReview, modalVisible, setModalVisible } : Props ) : JSX.Element => {

    const curLargeCat = useAppSelector((state) => state.categoryReducer.curLargeCat);
    const curMidCat = useAppSelector((state) => state.categoryReducer.curMidCat);
    const curStore = useAppSelector((state => state.curStateReducer.curStore));
    const [modifiedModalVisible, setModifiedModalVisible] = useState(false);
    
    useEffect(() => {
        if (!modifiedModalVisible) {
          setModalVisible(false);
        }
    }, [modifiedModalVisible]);

    const TOKEN_KEY = "@userKey";
    const onDelete = async () => {
        let tokentoken;
        await AsyncStorage.getItem(TOKEN_KEY, (err, result) => {
          tokentoken = result;
        });
        axios
          .delete(
            "/l-categories/" +
              curLargeCat +
              "/m-categories/" +
              curMidCat +
              "/stores/" +
              curStore +
              "/review",
            {
              headers: {
                authorization: tokentoken,
              },
            }
          )
          .then(function (res) {
            if (res.data.success) {
              setReload(true);
              setModalVisible(false);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    return (
        <Modal animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
            <ModalBackground style={{flex : 1}} onPress={() => setModalVisible(false)} />
            { isMyReview ? (
                <ModalView>
                    <OptionTouch onPress={() => {
                        setModifiedModalVisible(true);
                    }}>
                        <OptionText>수정하기</OptionText>
                    </OptionTouch>
                    <OptionTouch onPress={onDelete}>
                        <OptionText>삭제하기</OptionText>
                    </OptionTouch>
                    <OptionTouch onPress={() => {
                        setModalVisible(false);
                    }}>
                        <OptionText>취소</OptionText>
                    </OptionTouch>
                </ModalView>
            ) : (
                <ModalView>
                    <OptionTouch>
                        <OptionText>신고하기</OptionText>
                    </OptionTouch>
                    <OptionTouch onPress={() => {
                        setModalVisible(false);
                    }}>
                        <OptionText>취소</OptionText>
                    </OptionTouch>
                </ModalView>
            )}
        </Modal>
    )
}

export default ReviewOptionModal;
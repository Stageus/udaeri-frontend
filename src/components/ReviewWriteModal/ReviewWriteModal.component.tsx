import React, {useState, useEffect, Dispatch, SetStateAction} from "react";
import { useAppSelector } from "../../hooks/index.hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Rating } from "react-native-ratings";
import { Modal, ModalView, BlankSpace, LimitText, InputText, SubmitBtn, SubmitText, CloseBtn, KeyboardAvoidingView } from "./ReviewWriteModal.style";
import axios from "axios";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { XIcon } from "../../assets/icon/icons";
import { SvgXml } from "react-native-svg";

interface Props {
    setReload : Dispatch<SetStateAction<boolean>>;
    modalVisible : boolean;
    setModalVisible : (T : boolean) => void;
    defaultText : string;
    defaultRating : number;
    isModified : boolean;
}

const ReviewWriteModal = ({ setReload, modalVisible, setModalVisible, defaultText, defaultRating, isModified } : Props) : JSX.Element => {

    const curLargeCat = useAppSelector((state) => state.categoryReducer.curLargeCat);
    const curMidCat = useAppSelector((state) => state.categoryReducer.curMidCat);
    const curStore = useAppSelector((state) => state.curStateReducer.curStore);

    const [reviewText, setReviewText] = useState(defaultText);
    const [maxText, setMaxText] = useState(false);
    const [rating, setRarting] = useState(defaultRating);

    useEffect(() => {
        if (reviewText.length >= 30) {
            setMaxText(true);
        }
        else {
            setMaxText(false);
        }
    }, [reviewText])

    const TOKEN_KEY = "@userKey";

    const onSubmit = async () => {
        let tokentoken: string | null | undefined;
        await AsyncStorage.getItem(TOKEN_KEY, (err, result) => {
            tokentoken = result;
        });
        
        isModified ? (
            axios // 수정했을 때
                .put("/l-categories/" + curLargeCat + "/m-categories/" + curMidCat + "/stores/" + curStore + "/review",
                    {
                        review: reviewText,
                        star_rating: rating
                    }, {
                    headers: {
                        authorization: tokentoken,
                        "Content-Type": "application/json",
                    },
                })
                .then(function (res) {
                    if (res.data.success) {
                        setReload(true);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                }) )
        : (
            axios // 등록했을 때
                .post("/l-categories/" + curLargeCat + "/m-categories/" + curMidCat + "/stores/" + curStore + "/review",
                    {
                        review: reviewText,
                        star_rating: rating
                    }, {
                    headers: {
                        authorization: tokentoken,
                        "Content-Type": "application/json",
                    },
                })
                .then(function (res) {
                    if (res.data.success) {
                        setReload(true);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        )
    };

    const ratingCompleted = (rating: React.SetStateAction<number>) => {
        setRarting(rating);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
//            overlayBackground = {'rgba(0, 0, 0, 0.75'}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ModalView>
                        <Rating 
                            style={{ paddingVertical: 10 }}
                            imageSize={30}
                            startingValue={rating}
                            onFinishRating={ratingCompleted}
                            minValue={1}
                        />
                        <BlankSpace>
                            <InputText 
                                onChangeText={setReviewText}
                                value={reviewText}
                                placeholder={"리뷰를 입력해주세요."}
                                placeholderTextColor={'#C0C0C0'}
                                maxLength={30}
                                multiline={true}
                                returnKeyType={"done"}
                            />
                            <LimitText color={maxText}>
                                {reviewText.length} / 30
                            </LimitText>
                        </BlankSpace>

                        <SubmitBtn
                            onPress={() => {
                                if (reviewText.length > 0 && reviewText.length <= 30 && rating != 0) {
                                    onSubmit();
                                    setModalVisible(!modalVisible);
                                }
                            }}
                        >
                            <SubmitText>리뷰 작성</SubmitText>
                        </SubmitBtn>
                        <CloseBtn onPress={() => setModalVisible(false)}>
                            <SvgXml xml={XIcon} width="24px" height="24px" fill="gray" />
                        </CloseBtn>
                    </ModalView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default ReviewWriteModal;
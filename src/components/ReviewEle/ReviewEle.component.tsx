import React, {Dispatch, SetStateAction, useState} from "react";
import styled from "styled-components/native";
import { Rating } from 'react-native-ratings';
import { Container, ReviewWrap, LeftWrap, Nickname, Content, Date } from './ReviewEle.style';
import ReviewOptionModal from "../ReviewOptionModal/ReviewOptionModal.component";

interface Props {
    isMyReview : boolean;
    nickname : string;
    score : number;
    setReload : Dispatch<SetStateAction<boolean>>;
    content : string;
    date : string;
}

const ReviewEle = ({isMyReview, nickname, score, setReload, content, date} : Props) : JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <ReviewWrap isMyReview={isMyReview} onLongPress={() => setModalVisible(true)}>
            <Container>
                <LeftWrap>
                    <Nickname>{nickname}</Nickname>
                    <Rating
                        readonly={true}
                        imageSize={12}
                        startingValue={score}
                    />
                    <Content>{content}</Content>
                </LeftWrap>
                <Date>{date}</Date>
                <ReviewOptionModal
                    isMyReview={isMyReview}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    setReload={setReload}
                />
            </Container>
        </ReviewWrap>
    )
}

export default ReviewEle;
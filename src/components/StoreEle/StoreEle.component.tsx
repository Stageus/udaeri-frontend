import React from 'react';
import { Container, StoreThumbnail, ContentContainer, StoreName, Content, Wrap, Location, Distance, Likes } from './StoreEle.style'
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setCurStore } from '../../../store/slice/curStateSlice';

interface Prop {
    storeName : string;
    content : string;
    location : string;
}

const StoreEle = ({storeName, content, location, likes} : Prop) : JSX.Element => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    return (
        <Container onPress={() => {
            dispatch(setCurStore(storeName));
            navigation.navigate("StorePage");
        }}>
            <StoreThumbnail>
            </StoreThumbnail>
            <ContentContainer>
                <StoreName>{storeName}</StoreName>
                <Content>{content}</Content>
                <Wrap>
                    <Location>{location}</Location>
                    {/* <Entypo name="location-pin" size={12} color="green" />
                    <Distance>123</Distance>
                    <Ionicons name="ios-heart-circle-outline" size={12} color="red" /> */}
                    <Likes>{likes}</Likes>
                </Wrap>
            </ContentContainer>
        </Container>
    )
}

export default StoreEle
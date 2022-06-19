import React, { useState, useEffect } from "react";
import { Container, ScoreContainer, ScrollView, ScoresSummaryWrap, ReviewContainer } from './StoreReviewTab.style'
import { useAppSelector } from "../../../hooks/index.hooks";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ReviewEle from "../../../components/ReviewEle/ReviewEle.component";
import ScoreRating from "../../../components/ScoreRating/ScoreRating.component";
import ScoreSummary from "../../../components/ScoreSummary/ScoreSummary.component";
import ReviewOptionBar from "../../../components/ReviewOptionBar/ReviewOptionBar.component";
import ReviewWriteBtn from "../../../components/ReviewWriteBtn/ReviewWriteBtn.component";


type storeReview = {
    star_rating: number;
    nickname: string;
    review: string;
    writed_at : string;
};

const StoreReviewTab = () : JSX.Element => {

    const curLargeCat = useAppSelector((state) => state.categoryReducer.curLargeCat);
    const curMidCat = useAppSelector((state) => state.categoryReducer.curMidCat);
    const curStore = useAppSelector((state => state.curStateReducer.curStore));

    const [storeReview, setStoreReview] = useState([]);
    const [reload, setReload] = useState(true); // 새로고침 state
    const [myReview, setMyReview] = useState(null);

    const TOKEN_KEY = "@userKey";

    const getStore = async () => {
        let token: string | null | undefined;
        await AsyncStorage.getItem(TOKEN_KEY, (err, result) => {
            token = result;
        });
        axios
            .get("/l-categories/" + curLargeCat + "/m-categories/" + curMidCat + "/stores/" + curStore + "/review",
                {
                    headers: {
                        Authorization: token,
                    },
                    body: { "order_type": "최신순" }
                }
            )
            .then((res) => {
                //console.log("이미 썼는가? :", res.data.isWrited);
                if (res.data.success) {
                    setMyReview(res.data.myReview);
                    setStoreReview(res.data.list);
                    setReload(false);
                }
            })
            .catch((err) => {
                console.log("error");
                console.log(err);
            });
    }

    useEffect(() => {
        if (reload) {
            getStore();
        }
    }, [reload])

    let scoreSum : number = 0
    const scoreDist = [0, 0, 0, 0, 0] // 별점 분포

    storeReview && storeReview.map((item : storeReview) => {
        scoreSum += item.star_rating
        scoreDist[5 - item.star_rating] += 1
    })

    const scoreAvg : number = (scoreSum / storeReview.length).toFixed(1); // 평균 별점
    const totalScore : number = scoreDist.reduce((a, b) => a + b);

    return (
        <Container>
            <ScoreContainer>
                <ScoreRating score={scoreAvg} />
                <ScoresSummaryWrap>
                    {scoreDist && scoreDist.map((item, index) => (
                        <ScoreSummary score={index} nums={item} total={totalScore} />
                    ))}
                </ScoresSummaryWrap>
            </ScoreContainer>
            <ReviewOptionBar reviewNums={storeReview.length} /> 
            <ReviewContainer>
                <ScrollView>
                    {storeReview && storeReview.map((item : storeReview) => (
                        <ReviewEle 
                            nickname={item.nickname} 
                            score={item.star_rating} 
                            content={item.review} 
                            date={item.writed_at.substr(0, 10)} 
                            isMyReview={JSON.stringify(item) === JSON.stringify(myReview)} 
                            setReload={setReload}
                        />
                    ))}
                </ScrollView>
            </ReviewContainer>
            
            {
                myReview === null ? 
                    <ReviewWriteBtn 
                        setReload={setReload}
                    /> :
                    <></>
            }
        </Container>
    )
}
export default StoreReviewTab;
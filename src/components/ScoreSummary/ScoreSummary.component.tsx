import React from "react";
import { View } from "react-native";
import {Container, ScoreNumber, ScoreEmptyBar, ScoreFilledBar} from "./ScoreSummary.style"

interface Props {
    score : number;
    nums : number;
    total : number;
}

const ScoreSummary = ({ score, nums, total } : Props):JSX.Element => {
    return(
    <Container>
        <ScoreNumber>{5 - score}점</ScoreNumber>
            <View>
                <ScoreEmptyBar></ScoreEmptyBar>
                <ScoreFilledBar gauge={nums} total={total}></ScoreFilledBar>
            </View>
    </Container>
    )
}

export default ScoreSummary
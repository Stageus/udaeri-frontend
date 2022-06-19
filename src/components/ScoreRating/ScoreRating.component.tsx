import React from "react";
import { Rating } from "react-native-ratings";
import { Container, Score } from "./ScoreRating.style"

interface Props {
    score : number;
}

const ScoreRating = ({ score } : Props) : JSX.Element => {
    return (
        <Container>
            <Score>{score}</Score>
            <Rating
                readonly = {true}
                imageSize = {18}
                startingValue={score}
            />
        </Container>
    )
}

export default ScoreRating
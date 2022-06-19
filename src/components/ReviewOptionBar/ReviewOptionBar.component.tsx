import React from "react";
import { Container, Left, ReviewNums, ReviewText, Right} from "./ReviewOptionBar.style"

interface Props {
    reviewNums : number;
}

const ReviewOptionBar = ({reviewNums} : Props) : JSX.Element => {
    return (
        <Container>
            <Left>
                <ReviewText>리뷰</ReviewText>
                <ReviewNums>{reviewNums}</ReviewNums>
            </Left>
            <Right></Right>
        </Container>
    )
}

export default ReviewOptionBar
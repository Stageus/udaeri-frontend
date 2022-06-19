import React, {useState, Dispatch, SetStateAction} from 'react';
import { useAppSelector } from '../../hooks/index.hooks';
import ReviewWriteModal from '../ReviewWriteModal/ReviewWriteModal.component';
import { Container, ReviewWriteBtnBlock } from "./ReviewWriteBtn.style";
import { PencilIcon } from "../../assets/icon/icons";
import { SvgXml } from "react-native-svg";

interface Props {
    setReload : Dispatch<SetStateAction<boolean>>
}

const ReviewWriteBtn = ({setReload} : Props): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Container>
            <ReviewWriteBtnBlock onPress={() => setModalVisible(true)}>
                <SvgXml xml={PencilIcon} width="24px" height="24px" fill="#ffffff" />
            </ReviewWriteBtnBlock>
            <ReviewWriteModal
                setReload={setReload}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                defaultText={""}
                defaultRating={0}
                isModified={false}
            />
        </Container>
    )
}

export default ReviewWriteBtn;
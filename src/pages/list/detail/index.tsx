import React from "react";
import { useNavigate } from "react-router-dom";

// Styles
import * as S from "./style";

// Images
import Back from "../../../asset/image/Back.png";
import Menu from "../../../asset/image/Menu.png";

function DetailPage(): React.ReactElement {
    const navigate = useNavigate();

    const MoveToBack = () => {
        navigate("/list");
    }
    return(
        <S.View>
            <S.HeaderContainer>
                <S.BackImg src={Back} onClick={MoveToBack} />
                <S.HeaderTitle>게시판</S.HeaderTitle>
            </S.HeaderContainer>
            <S.ListContainer>
                <S.ListTitle>영화관 키오스크<S.MenuImg src={Menu} /></S.ListTitle>
                <S.ListDate>2023.07.04</S.ListDate>
                <S.Tag>
                    <S.TagName>영화관</S.TagName>
                </S.Tag>
                <S.Content>
                    1. 기계를 켜면 웹서버에 접속해서 모니터(터치)에 초기화면이 나타난다. 
                    2. 메뉴를 선택하고 신용카드 리더기에 신용카드를 넣고 결제를 진행한다.
                </S.Content>
            </S.ListContainer>
        </S.View>
    );
}

export default DetailPage;
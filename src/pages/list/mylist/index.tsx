import React from "react";

// Styles
import * as S from "./style";

// Images
import Menu from "../../../asset/image/Menu.png";

function MyListPage(): React.ReactElement {
    return(
        <S.View>
            <S.HeaderContainer>
                <S.HeaderTitle>내가 쓴 글</S.HeaderTitle>
            </S.HeaderContainer>
            <S.ListContainer>
                <S.ListTitle>키오스크 사용법 알려드립니다<S.MenuImg src={Menu} /></S.ListTitle>
                <S.ListContent>이 편지는 영국에서 최초로 시작되어...</S.ListContent>
                <S.ListDate>2023.07.04</S.ListDate>
            </S.ListContainer>
            <S.ListContainer>
                <S.ListTitle>키오스크 사용법 알려드립니다<S.MenuImg src={Menu} /></S.ListTitle>
                <S.ListContent>이 편지는 영국에서 최초로 시작되어...</S.ListContent>
                <S.ListDate>2023.07.04</S.ListDate>
            </S.ListContainer>
        </S.View>
    );
}

export default MyListPage;
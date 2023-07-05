import React, { useRef, useEffect, useState } from "react";

// Styles
import * as S from "./style";

// Images
import AddBtn from "../../asset/image/AddBtn.png";

function ListPage(): React.ReactElement {
    return(
        <S.View>
            <S.HeaderContainer>
                <S.Title>게시판</S.Title>
                <S.TagContainer>
                    <S.Tag>음식점</S.Tag>
                    <S.Tag>은행</S.Tag>
                    <S.Tag>영화관</S.Tag>
                    <S.Tag>기타</S.Tag>
                </S.TagContainer>
            </S.HeaderContainer>
            <S.ListContainer>
                <S.ListTitle>키오스크 사용법 알려드립니다</S.ListTitle>
                <S.ListContent>이 편지는 영국에서 최초로 시작되어...</S.ListContent>
                <S.ListDate>2023.07.04</S.ListDate>
            </S.ListContainer>
            <S.ListContainer>
                <S.ListTitle>영화관 키오스크</S.ListTitle>
                <S.ListContent>이 편지는 영국에서 최초로 시작되어...</S.ListContent>
                <S.ListDate>2023.07.04</S.ListDate>
            </S.ListContainer>
            <S.ListContainer>
                <S.ListTitle>키오스크 사용법 알려드립니다</S.ListTitle>
                <S.ListContent>이 편지는 영국에서 최초로 시작되어...</S.ListContent>
                <S.ListDate>2023.07.04</S.ListDate>
            </S.ListContainer>
            <S.AddBtn>
                <img src={AddBtn} />
            </S.AddBtn>
        </S.View>
    )
}

export default ListPage;
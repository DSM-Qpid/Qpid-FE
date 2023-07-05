import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import * as S from "./style";

// Images
import Eyes from "../../asset/image/Eyes.png";
import Search from "../../asset/image/Search.png";
import X from "../../asset/image/X.png";

function SearchPage(): React.ReactElement {
    const navigate = useNavigate();
    function MoveToDetail() {
        navigate("/search/detail");
    }
    return(
        <S.View>
            <S.SearchContainer>
                <S.TitleContainer>
                    <S.SubTitle>"어, 이거 어떻게 사용하지?"</S.SubTitle>
                    <S.MainTitle>궁금했던 사용법을 검색하세요<S.Img src={Eyes} /></S.MainTitle>
                    <S.SearchBar onClick={() => MoveToDetail()}>궁금한 내용을 입력하세요<S.SeachImg src={Search} /></S.SearchBar>
                </S.TitleContainer>
            </S.SearchContainer>
            <S.SearchWordContainer>
                <S.SearchWordWrapper>
                    <S.Title>최근 검색어</S.Title>
                    <S.RecentContainer>
                        <S.Recent>
                            <S.Word>키오스크<S.CancelImg src={X} /></S.Word>
                        </S.Recent>
                        <S.Recent>
                            <S.Word>주문 기계<S.CancelImg src={X} /></S.Word>
                        </S.Recent>
                    </S.RecentContainer>
                </S.SearchWordWrapper>
            </S.SearchWordContainer>
        </S.View>
    );
}

export default SearchPage;
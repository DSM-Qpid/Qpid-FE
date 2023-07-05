import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

// Styles
import * as S from "./style";
import styled, { css } from "styled-components";

// Images
import AddBtn from "../../asset/image/AddBtn.png";
import Menu from "../../asset/image/Menu.png";

// Components
import DropDown from "../../components/dropdown";

const TagContainer = styled.div`
    width: 320px;
    height: 27px;
    display: flex;
    flex-direction: row;
`;

const Tag = styled.div<{ active: boolean }>`
    width: auto;
    height: auto;
    border: 1px solid #6A5DFF;
    border-radius: 70.38px;
    color: #6A5DFF;
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding: 3px 12px 0px 12px;
    margin-right: 10px;
    ${({ active }) =>
        active &&
        css`
            background-color: #6a5dff;
            color: #fff;
    `}
`;

function ListPage(): React.ReactElement {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeTag, setActiveTag] = useState("");

    const handleTagClick = (tag: React.SetStateAction<string>) => {
        setActiveTag(tag);
    }

    const handleMenuClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    return(
        <S.View>
            <S.HeaderContainer>
                <S.Title>게시판</S.Title>
                <TagContainer>
                    <Tag
                        active={activeTag === "음식점"}
                        onClick={() => handleTagClick("음식점")}
                    >
                        음식점
                    </Tag>
                    <Tag
                        active={activeTag === "은행"}
                        onClick={() => handleTagClick("은행")}
                    >
                        은행
                    </Tag>
                    <Tag
                        active={activeTag === "영화관"}
                        onClick={() => handleTagClick("영화관")}
                    >
                        영화관
                    </Tag>
                    <Tag
                        active={activeTag === "기타"}
                        onClick={() => handleTagClick("기타")}
                    >
                        기타
                    </Tag>
                </TagContainer>
            </S.HeaderContainer>
            <S.ListContainer>
                <S.ListTitle>키오스크 사용법 알려드립니다<S.MenuImg src={Menu} onClick={handleMenuClick} />{isDropdownOpen && <DropDown />}</S.ListTitle>
                <S.ListContent>이 편지는 영국에서 최초로 시작되어...</S.ListContent>
                <S.ListDate>2023.07.04</S.ListDate>
            </S.ListContainer>
            <S.ListContainer>
                <S.ListTitle>영화관 키오스크<S.MenuImg src={Menu} /></S.ListTitle>
                <S.ListContent>이 편지는 영국에서 최초로 시작되어...</S.ListContent>
                <S.ListDate>2023.07.04</S.ListDate>
            </S.ListContainer>
            <S.ListContainer>
                <S.ListTitle>키오스크 사용법 알려드립니다<S.MenuImg src={Menu} /></S.ListTitle>
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
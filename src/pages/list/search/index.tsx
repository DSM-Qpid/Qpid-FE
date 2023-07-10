import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Styles
import * as S from "./style";

// Images
import Eyes from "../../../asset/image/Eyes.png";
import Search from "../../../asset/image/Search.png";
import X from "../../../asset/image/X.png";
import DropDown from "../../../components/dropdown";
import Menu from "../../../asset/image/Menu.png"

function SearchPage(): React.ReactElement {

    const [inputValue, setInputValue] = useState('');
    const [showClearButton, setShowClearButton] = useState(false);
    const [searchList, setSearchList] = useState<any[]>([]);

    function SearchData(keyword: any) {
        axios.get(`/feeds/search?keyword=${encodeURI(keyword)}`)
        .then((res: any) => {
            setSearchList([...res.data.feed_list.reverse()]);
        })
        .catch(err => {
            console.log(err);
        })  
    }
    
    const navigate = useNavigate();

    const [dropDownIdx, setDropDownIdx] = useState(-1);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleMenuClick = (idx: number) => {
        if(idx !== dropDownIdx) {
            setDropDownIdx(idx);
        }
        else {
            setDropDownIdx(-1);
        }
    }

    const handleMenuClick2 = (event: React.MouseEvent<HTMLDivElement>, idx: number) => {
        if (dropdownRef.current && dropdownRef.current.contains(event.target as Node)) {
          
        } else {
          navigate(`/list/detail/${searchList[idx].id}`)
        }
    };

    function MoveToDetail() {
        navigate("/search/detail");
    }

    return(
        <S.View>
            <S.SearchContainer>
                <S.TitleContainer>
                    <S.SubTitle><span>"어, 이거 어떻게 사용하지?"</span></S.SubTitle>
                    <S.MainTitle><span>궁금했던 사용법을</span></S.MainTitle>
                    <S.MainTitle><span>검색하세요<S.Img src={Eyes} /></span></S.MainTitle>
                    <S.SearchBar><input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="궁금한 내용을 입력하세요"/><S.SeachImg onClick={()=>SearchData(inputValue)} src={Search} /></S.SearchBar>
                </S.TitleContainer>
            </S.SearchContainer>
            <S.View2>
            {searchList.map((data, idx) => (
                <S.ListContainer onClick={(e: React.MouseEvent<HTMLDivElement>) => handleMenuClick2(e, idx)} key={data.id}>
                <S.ListTitle>{data.title}
                    <S.MenuDiv ref={dropdownRef}>
                        <S.MenuImg src={Menu} onClick={() => handleMenuClick(idx)} />
                        {dropDownIdx === 0 && <DropDown id={data.id} />}
                    </S.MenuDiv>
                </S.ListTitle>
                <S.ListContent>{data.content}</S.ListContent>
                <S.ListDate>{data.created_at}</S.ListDate>
                </S.ListContainer>
            ))}
            </S.View2>
        </S.View>
    );
}

export default SearchPage;
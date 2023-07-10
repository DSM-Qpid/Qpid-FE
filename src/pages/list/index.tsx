import React, { useRef, useEffect, useState, useCallback } from "react";
import axios from "axios";

// Styles
import * as S from "./style";
import styled, { css } from "styled-components";

// Images
import AddBtn from "../../asset/image/AddBtn.png";
import Menu from "../../asset/image/Menu.png";

// Components
import DropDown from "../../components/dropdown";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    const [dropDownIdx, setDropDownIdx] = useState(-1);
    const [activeTag, setActiveTag] = useState("");
    const [list, setList] = useState<any[]>([]);
    const [tagList, setTagList] = useState<any[]>([]);
    const [viewList, setViewList] = useState<any[]>([]);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        GetToken();
    });

    useEffect(() => {
        GetList();
    }, []);

    const GetList = useCallback(async () => {
        axios.get("/feeds/all")
            .then(res => {
                setList(res.data.feed_list);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const fetchData = useCallback(async (tag: string) => {
        try {
            const response = await axios.get(`/feeds?tag=${tag}`, {
                headers: {
                Authorization: `${localStorage.getItem("qpid-atk")}`,
                'ngrok-skip-browser-warning': '69420',
                },
            });
            setViewList(response.data.feed_list.reverse());
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        setViewList(list.reverse());
    }, [list]);

    const handleTagClick = (tag: string) => {
        if(tag !== activeTag) {
            setActiveTag(tag);
            fetchData(tag);
        }
        else {
            setActiveTag("");
            GetList();
        }
    }


    const handleMenuClick = (idx: number) => {
        if(idx !== dropDownIdx) {
            setDropDownIdx(idx);
        }
        else {
            setDropDownIdx(-1);
        }
    }

    // interface AndroidInterface {
    //     sendEventToAndroid(eventName: string, eventData: object): void;
    // }

    // const sendEventToAndroid = (eventName: string, eventData: object) => {
    //     const jsonString = JSON.stringify(eventData);
    //     (window as any).AndroidInterface.sendEventToAndroid(eventName, jsonString);
    // };

    const MoveTowrite = () => {
        try{
            window.webview.write();
        } catch(e) {
            alert(e);
        }
    }

    const GetToken = () => {
        try{
            // let atk = window.webview.token();
            //localStorage.setItem('qpid-atk', "Bearer eyJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmcm9udHRlc3QiLCJyb2xlIjoiVVNFUiIsImV4cCI6MTY4ODU2NTQ1MywiaWF0IjoxNjg4NTYxODUzfQ.IIcb5k1r_LWCU6CPaacHEXcWDCA3YUt5C2HjGwyXvB8");
        } catch (e) {
            console.log(e);
        }
    }

    const handleMenuClick2 = (event: React.MouseEvent<HTMLDivElement>, idx: number) => {
        if (dropdownRef.current && dropdownRef.current.contains(event.target as Node)) {
          // 클릭된 요소가 dropdownRef에 속한 요소인 경우 아무 작업도 수행하지 않음
          return;
        } else {
          // 클릭된 요소가 dropdownRef에 속하지 않은 경우 navigate 함수 실행
          navigate(`/list/detail/${viewList[idx].id}`);
        }
      }; 

    return(
        <S.View>
            <S.HeaderContainer>
                <S.Title>게시판</S.Title>
                <TagContainer>
                    <Tag
                        active={activeTag === "FOOD"}
                        onClick={() => handleTagClick("FOOD")}
                    >
                        음식점
                    </Tag>
                    <Tag
                        active={activeTag === "BANK"}
                        onClick={() => handleTagClick("BANK")}
                    >
                        은행
                    </Tag>
                    <Tag
                        active={activeTag === "MOVIE"}
                        onClick={() => handleTagClick("MOVIE")}
                    >
                        영화관
                    </Tag>
                    <Tag
                        active={activeTag === "ETC"}
                        onClick={() => handleTagClick("ETC")}
                    >
                        기타
                    </Tag>
                </TagContainer>
            </S.HeaderContainer>
            <S.View2>
            {viewList.map((data, idx) => (
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
            <S.AddBtn onClick={MoveTowrite}>
                <img src={AddBtn} />
            </S.AddBtn>
        </S.View>
    )
}

export default ListPage;


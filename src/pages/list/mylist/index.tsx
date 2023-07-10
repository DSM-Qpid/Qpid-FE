import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

// Styles
import * as S from "./style";

// Images
import Menu from "../../../asset/image/Menu.png";

function MyListPage(): React.ReactElement {
    const [list, setList] = useState([]);
    const [viewList, setViewList] = useState<any[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get("https://1ce7-119-203-74-86.ngrok-free.app/feeds/mine", {
                headers: {
                Authorization: `${localStorage.getItem("qpid-atk")}`,
                },
            });
            setList(response.data.feed_list);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        setViewList(list.reverse());
    }, [list]);

    return(
        <S.View>
            <S.HeaderContainer>
                <S.HeaderTitle>내가 쓴 글</S.HeaderTitle>
            </S.HeaderContainer>
            {viewList.map((data) => (
                <S.ListContainer>
                    <S.ListTitle>{data.title}</S.ListTitle>
                    <S.ListContent>{data.content}</S.ListContent>
                    <S.ListDate>{data.created_at}</S.ListDate>
                </S.ListContainer>
            ))}
        </S.View>
    );
}

export default MyListPage;
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

// Styles
import * as S from "./style";

// Images
import Back from "../../../asset/image/Back.png";
import Menu from "../../../asset/image/Menu.png";
import DropDown from "../../../components/dropdown";

function DetailPage(): React.ReactElement {

    const [info, setInfo] = useState({    
    title: "",
    content: "",
    tag: "",
    created_at: ""})

    useEffect(() => {
        GetDetail();
    }, []);

    const {id} = useParams();
    
    const GetDetail = useCallback(async () => {
        try {
            const response = await axios.get(`/feeds/details/${id}`);
            setInfo(response.data)
        } catch (err) {
            navigate(-1);
        }
    }, []);

    const navigate = useNavigate();

    const MoveToBack = () => {
        navigate(-1);
    }

    useEffect(()=>{
        console.log(id)
    },[])

    const [d, sD] = useState(false)

    return(
        <S.V>
        <S.View>
            <S.HeaderContainer>
                <S.BackImg src={Back} onClick={MoveToBack} />
                <S.HeaderTitle>게시판</S.HeaderTitle>
            </S.HeaderContainer>
            <S.ListContainer>
                <S.ListTitle>
                    {info.title}
                    <S.MenuDiv>
                        <S.MenuImg src={Menu} onClick={()=>sD(true)}/>
                        {d && <DropDown id={Number(id)} />}
                    </S.MenuDiv>
                </S.ListTitle>
                <S.ListDate>{info.created_at}</S.ListDate>
                <S.Tag>
                    <S.TagName>{info.tag}</S.TagName>
                </S.Tag>
                <S.Content>
                    {info.content}
                </S.Content>
            </S.ListContainer>
        </S.View>
        </S.V>
    );
}

export default DetailPage;
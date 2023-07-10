import React, { useState, useEffect, useCallback } from "react";

// Styles
import * as S from "./style";
import axios from "axios";

function DropDown({id} : {id: number}): React.ReactElement {

    const [onDel, setOnDel] = useState(false);

    const del = () => {
        axios.delete(`/feeds/${id}`)
            .then(res => window.location.reload())
            .catch(err => alert("삭제에 실패했습니다. error"))
    }

    const sendEventToAndroid = (eventName: string, eventData: object) => {
        const jsonString = JSON.stringify(eventData);
        (window as any).AndroidInterface.sendEventToAndroid(eventName, jsonString);
    };

    const GetDetail = useCallback(async () => {
        try {
            const response = await axios.get(`/feeds/details/${id}`);
            setInfo({id: id, title: response.data.title, content: response.data.content, tag: response.data.tag})
        } catch (err) {
            console.log(err);
        }
    }, []);

    const [info, setInfo] = useState<any>();
    
    useEffect(() => {
        GetDetail();
    }, []);

    const goPatch = () => {
        window.webview.patch(info);
    }

    return(
        <>
            <S.DropdownContainer>
                <S.Dropdown>
                    {/*<S.DropdownItems onClick={()=>goPatch()}>
                        <span>수정</span>
                    </S.DropdownItems>*/}
                    <S.DropdownItems onClick={()=>setOnDel(true)}>
                        <span>삭제</span>
                    </S.DropdownItems>
                </S.Dropdown>
            </S.DropdownContainer>
            {onDel ?
                <S.Background>
                    <S.Modal>
                        <p><span>정말 삭제하시겠습니까?</span></p>
                        <S.ButtonDiv>
                            <button onClick={()=>del()}>네</button>
                            <button onClick={()=>setOnDel(false)} style={{color: "#6A5DFF"}}>아니요</button>
                        </S.ButtonDiv>
                    </S.Modal>
                </S.Background>
                :
                <></>
            }
        </>
    );
}

export default DropDown;
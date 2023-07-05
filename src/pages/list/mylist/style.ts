import styled from "styled-components";
import "../../../asset/font/font.css";

export const View = styled.div`
    width: 360px;
    height: 407px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    width: 328px;
    height: 49px;
`;

export const HeaderTitle = styled.div`
    width: auto;
    height: auto;
    margin: 10px;
    font-family: "Pretendard_SB";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
`;

export const ListContainer = styled.div`
    width: 90%;
    height: auto;
    background-color: #F5F6F6;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 12px;
    &:first-child{
        margin-top: 12px;
    }
`;

export const ListTitle = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    width: auto;
    height: auto;
    font-family: "Pretendard_B";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #000;
    display: flex;
    justify-content: space-between;
`;

export const ListContent = styled.div`
    margin-left: 20px;
    margin-top: 6px;
    margin-bottom: 6px;
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #7A7A7A;
`;

export const ListDate = styled.div`
    margin-left: 20px;
    margin-bottom: 20px;
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #BCBCBC;
`;

export const MenuImg = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 20px;
`;
import styled from "styled-components";
import "../../asset/font/font.css";

export const View = styled.div`
    width: 360px;
    height: 536px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 129px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    width: 320px;
    height: 36px;
    padding-left: 10px;
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 16px;
`;

export const TagContainer = styled.div`
    width: 320px;
    height: 27px;
    display: flex;
    flex-direction: row;
`;

export const Tag = styled.div`
    width: auto;
    height: auto;
    border: 1px solid #6A5DFF;
    border-radius: 70.38px;
    color: #6A5DFF;
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding: 0px 12px 0px 12px;
    margin-right: 10px;
    &:active{
        background-color: #6A5DFF;
        color: #fff;
    }
`;

export const ListContainer = styled.div`
    width: 90%;
    height: auto;
    background-color: #F5F6F6;
    border-radius: 20px;
    margin-top: 10px;
    &:first-child{
        margin-top: 0;
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

export const AddBtn = styled.div`
    width: 68px;
    height: 68px;
    margin-right: 21px;
    margin-bottom: 19px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
`;
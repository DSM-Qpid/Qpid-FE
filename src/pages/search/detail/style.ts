import styled from "styled-components";
import "../../../asset/font/font.css";

export const View = styled.div`
    width: 360px;
    height: 536px;
`;

export const SearchBar = styled.div`
    width: 100%;
    height: 56px;
    border-bottom: 2px solid #F0F0F0;
    border-top: none;
    border-left: none;
    border-right: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchInput = styled.input`
    width: 200px;
    height: 24px;
    outline: none;
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    border: none;
    padding-right: 30px;
`;

export const SeachImg = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 20px;
`;

export const CancelImg = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
    left: 260px;
    top: 20px;
`;
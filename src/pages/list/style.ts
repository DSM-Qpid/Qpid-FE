import styled from "styled-components";
import "../../asset/font/font.css";

export const View = styled.div`
    width: 100%;
    height: 536px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const View2 = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    width: 90%;
    height: 129px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const Title = styled.div`
    width: 320px;
    height: 36px;
    padding-left: 10px;
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 25px;
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
    display: flex;
    justify-content: space-between;
`;

export const ListContent = styled.div`
    width: 288px;
    margin-left: 20px;
    margin-top: 6px;
    margin-bottom: 6px;
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #7A7A7A;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 200;
`;

export const MenuDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    z-index: 100;
`

export const MenuImg = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 20px;
    z-index: 100;
`;
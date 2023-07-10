import styled from "styled-components";
import "../../../asset/font/font.css";

export const View = styled.div`
    width: 100%;
    height: 536px;
`;

export const View2 = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SearchContainer = styled.div`
    width: 100%;
    height: 205px;
    background-color: #6A5DFF;
    border-radius: 0 0 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TitleContainer = styled.div`
    width: auto;
    height: auto;
    margin: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SubTitle = styled.div`
    width: 100%;
    height: auto;
    font-family: "Pretendard_R";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 20px;
`;

export const MainTitle = styled.div`
    width: 100%;
    height: auto;
    font-family: "Pretendard_B";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #fff;
    margin-left: 10px;
`;

export const Img = styled.img`
    width: auto;
    height: auto;
    margin-left: 10px;
`;  

export const SearchBar = styled.div`
    width: 100%;
    height: 56px;
    border: 1px solid #564BD4;
    border-radius: 100px;
    color: #D0D0D0;
    background-color: #fff;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    box-sizing: border-box;
    input {
        width: 300px;    
        outline: 0;
        border: 0;  
        font-family: "Pretendard_M";
        font-style: normal;
        font-weight: 400;
        font-size: 20px; 
    }
`;

export const SeachImg = styled.img`
    width: auto;
    height: auto;
`;

export const SearchWordContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const SearchWordWrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.div`
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: start;
    display: flex;
    width: 328px;
    color: #000;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
`;

export const RecentContainer = styled.div`
    width: 328px;
    height: auto;
    display: flex;
    align-items: center;
    margin-left: 10px;
    overflow-x: scroll;
`;

export const Recent = styled.div`
    height: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6A5DFF;
    border-radius: 100px;
    margin-right: 8px;
    white-space: nowrap;
`;

export const Word = styled.div`
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    margin: 6px 0 6px 6px;
`;

export const CancelImg = styled.img`
    width: 12px;
    height: 12px;
    margin-left: 4px;
    margin-right: 12px;
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
`

export const MenuImg = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 20px;
    z-index: 100;
`;
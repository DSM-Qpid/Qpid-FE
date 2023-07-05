import styled from "styled-components";

export const View = styled.div`
    width: 360px;
    height: 536px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackImg = styled.img`
    width: 28px;
    height: 24px;
    margin-left: 16px;
`;

export const HeaderTitle = styled.div`
    font-family: "Pretendard_B";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #000;
    margin-left: 110px;
    margin-right: 154px;
`;

export const ListContainer = styled.div`
    width: 328px;
    height: auto;
    background-color: #F5F6F6;
    border-radius: 20px;
    margin-top: 16px;
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
    margin-top: 6px;
    margin-bottom: 6px;
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #BCBCBC;
`;

export const Tag = styled.div`
    width: 56px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #6A5DFF;
    border-radius: 100px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const TagName = styled.div`
    font-family: "Pretendard_M";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #6A5DFF;
`;

export const Content = styled.div`
    width: 288px;
    height: auto;
    margin-top: 6px;
    margin-left: 20px;
    margin-bottom: 46px;
    font-family: "Pretendard_R";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000;
`;

export const MenuImg = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 20px;
`;
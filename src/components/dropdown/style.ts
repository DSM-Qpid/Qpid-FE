import styled from "styled-components";

export const DropdownContainer = styled.div`
    position: absolute;
    transform: translateX(-90px)
`;

export const Dropdown = styled.ul`
    padding: 0;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 0px 0px rgba(0,0,0,0.1)
`;

export const DropdownItems = styled.li`
    width: 110px;
    height: 40px;
    list-style-type: none;
    font-size: 14px;
    font-family: "Pretendard_R";
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    &:last-child{
        color: #FF0000;
        border-top: 1px solid #D0D0D0;
        border-radius: 10px;
    }
`;


export const Background = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Modal = styled.div`
    width: 260px;
    height: 160px;
    background-color: white;
    border-radius: 18px 18px;
    p{
        height: 113px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
    }
`

export const ButtonDiv = styled.div`
    display: flex;
    border-top: 1px solid #D0D0D0;
    button {
        border: 0;
        background: white;
        height: 47px;
        width: 50%;
    }
    :nth-child(1) {
        border-right: 1px solid #D0D0D0;
        border-end-start-radius: 18px;
    }
    :nth-child(2) {
        border-end-end-radius: 18px;
    }
`
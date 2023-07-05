import React, { useState } from "react";

// Styles
import * as S from "./style";

function DropDown(): React.ReactElement {
    return(
        <>
            <S.DropdownContainer>
                <S.Dropdown>
                    <S.DropdownItems>수정</S.DropdownItems>
                    <S.DropdownItems>삭제</S.DropdownItems>
                </S.Dropdown>
            </S.DropdownContainer>
        </>
    );
}

export default DropDown;
import React, { useState, useRef, useEffect } from "react";

// Styles
import * as S from "./style";

// Images
import Search from "../../../asset/image/Search.png";
import Cancel from "../../../asset/image/Cancel.png";

function DetailSearchPage(): React.ReactElement {
    const [inputValue, setInputValue] = useState('');
    const [showClearButton, setShowClearButton] = useState(false);

    const handleInputChange = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        setInputValue(value);
    
        if (value.length > 0) {
            setShowClearButton(true);
            } else {
            setShowClearButton(false);
        }
    };

    const handleClearClick = () => {
        setInputValue('');
        setShowClearButton(false);
    };

    return(
        <S.View>
            <S.SearchBar>
                <S.SearchInput 
                    type={"text"}
                    value={inputValue} 
                    onChange={handleInputChange} 
                    maxLength={20} 
                />
                {showClearButton && (
                    <S.CancelImg
                        src={Cancel}
                        alt="Clear"
                        onClick={() => handleClearClick()}
                    />
                )}
                <S.SeachImg src={Search} />
            </S.SearchBar>
        </S.View>
    );
}

export default DetailSearchPage;
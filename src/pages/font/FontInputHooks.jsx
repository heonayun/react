import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputSizeUp } from '../../redux/modules/font';
import useInput from '../../hooks/useInput';



// 사용자에게 입력받은 폰트사이즈
// 폰트 크기를 변경하기

const FontInputHooks = () => {

    const fontSize = useSelector((state) => state.fontSize)
    const dispatch = useDispatch()

    const [input, onChangeInput] = useInput("")

    return (
        <div>
            <h1 style={{fontSize : fontSize}}>1조, 2조 조장 축하합니다😊</h1>
            <input 
                type='text' 
                placeholder='글자 크기를 입력하세요. ex) 1rem'
                value={input}
                onChange={onChangeInput}
            />
            <button onClick={() => {dispatch(inputSizeUp(input))}}>사이즈 조절</button>
        </div>
    );
};

export default FontInputHooks;
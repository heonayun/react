import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputSizeUp } from '../../redux/modules/font';



// 사용자에게 입력받은 폰트사이즈
// 폰트 크기를 변경하기

const FontInputComponent = () => {

    const fontSize = useSelector((state) => state.fontSize)
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const onChangeInput = (e) =>{
        setValue(e.target.value)
    }
    // const onKeyUpInput = (e) => {
    //     if(e.key === 'Enter'){
    //         dispatch(inputSizeUp(value))
    //     }
    // }



    return (
        <div>
            <h1 style={{fontSize : fontSize}}>1조, 2조 조장 축하합니다😊</h1>
            <input 
                type='text' 
                placeholder='글자 크기를 입력하세요. ex) 1rem'
                value={value}
                onChange={onChangeInput}
            />
            <button onClick={() => {dispatch(inputSizeUp(value))}}>사이즈 조절</button>
        </div>
    );
};

export default FontInputComponent;
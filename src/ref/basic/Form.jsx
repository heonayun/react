import React from 'react';

const Form = (props) => { 
    const {
        inputsRef,
        formRef,
        onClickInputValue,
        style
    } = props

    // 실습
    // props 받아서 form 태그에
    // input태그 4개 (이름, 나이, 전화번호, 이메일)
    // 화면 쪽에서 유효값 검사  

    return (
        <div>
            <form action="#" style={style} ref={formRef}>
                <div><span>아이디</span><input type="text" name='id' ref={(element) => {inputsRef.current[0] = element}}/></div>
                <div><span>나이</span><input type="text" name='age' ref={(element) => {inputsRef.current[1] = element}}/></div>
                <div><span>전화번호</span><input type="text" name='phone' ref={(element) => {inputsRef.current[2] = element}}/></div>
                <div><span>이메일</span><input type="text" name='email' ref={(element) => {inputsRef.current[3] = element}}/></div>
                <button type='button' onClick={onClickInputValue}>입력완료</button>
            </form>
        </div>
    );
};

export default Form;
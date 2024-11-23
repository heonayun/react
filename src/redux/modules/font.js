import { createAction, handleActions } from "redux-actions"

// 1번 실습
// Type 생성
const SIZEUP = "font/SIZEUP"
// Action 생성
export const sizeUp = createAction(SIZEUP)

// 2번 예제
const INPUTSIZEUP = "font/INPUTSIZEUP"
export const inputSizeUp = createAction(INPUTSIZEUP, (fontSize) => fontSize)

const initialState = {
    fontSize : "1rem"
};

// Reducer 제작
const font = handleActions({
    [SIZEUP] : (state, action) => ({fontSize : "3rem"}),
    [INPUTSIZEUP] : (state, action) => ({fontSize : action.payload}),
}, initialState)

export default font;
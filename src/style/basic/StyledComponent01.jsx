import React from 'react';
import S from '../style';

const StyledComponent01 = () => {
    return (
        <div>
            <S.Styled color ={"blue"}>스타일된 컴포넌트 입니다.
            <input />
            <button>
                <p>입력</p>
            </button>
            </S.Styled>
            {/* styled input을 만들어서 background 컬러를 props로 pink를 받기 */}
            <S.Input background ={"pink"}></S.Input>
            <S.Button>스타일된 버튼입니다.</S.Button>
        </div>
    );
};

export default StyledComponent01;
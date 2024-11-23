import React from 'react';

const component2 = (props) => {
    console.log(props)
    return (
        <div style={props.style}>
            회원의 정보를 보여주는 컴포넌트!
        </div>
    );
};

export default component2;
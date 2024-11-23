import React from 'react';
import FontSizeComponent from './FontSizeComponent';
import { FontSizeConsumer } from '../FontSizeContext';

const ChildContainer = () => {
    return (
        <div>
            <FontSizeConsumer>
                {(context) => 
                    <>
                        <h6 style={{fontSize : context.state.fontSize}}>안녕, 리엑트!</h6>
                        <button onClick={() => {context.action.setFontSize("5rem")}}>커지는 버튼</button>
                    </>
                }
            </FontSizeConsumer>
            <FontSizeComponent />
        </div>
    );
};

export default ChildContainer;
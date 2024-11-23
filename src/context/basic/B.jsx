import React from 'react';
import C from './C';
import CharContext from '../CharContext';

const B = () => {
    return (
        <div>
            <CharContext.Consumer>
                {(context) => <p style={{fontSize : context.fontSize }}>이건 B에서 제공받고 있는 컨슈머</p>}
            </CharContext.Consumer>
            <C />
        </div>
    );
};

export default B;
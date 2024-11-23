import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

// 쿼리스트링으로 hello의 key값으로 값을 전달할때만 안녕하세요를 출력하기!

const Intro = () => {
    const [searchParams] = useSearchParams()
    const hello =searchParams.get('hello')

    return (
        <>
            <div>
                소개 페이지 환영합니다.😃
            </div>
            {/* 
                파라미터(구분점)를 보내는데,
                퀴리스트링 방법
            */}
            {/* <div>
                <Link to='/job?title=developer'>개발자 소개페이지로 이동</Link>
            </div>
            <div>
                <Link to='/job?title=planner'>기획자 소개페이지로 이동</Link>
            </div> */}

            {/* url 파라미터 방법 */}
            <div>
                <Link to='/job/developer'>개발자 소개페이지로 이동</Link>
            </div>
            <div>
                <Link to='/job/planner'>기획자 소개페이지로 이동</Link>
            </div>

            {hello && <h1>안녕하세요😃</h1>}
            {/* {hello && <h1>{hello}</h1>} */}
        </>
    );
};

export default Intro;
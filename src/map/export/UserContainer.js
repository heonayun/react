import React from 'react';
// import User from './User';
import Users from './Users';
// import { useAsync } from 'react-async';

// const getUsers = async () => {  
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json()
//     return users;
// }

const UserContainer = () => {
    
    const users =[
        {
            id: 1,
            name: '허나윤',
            email: 'heonayun@naver.com'
        },
        {
            id: 2,
            name: '홍길동',
            email: 'honggildong@naver.com'
        },
        {
            id: 3,
            name: '신짱구',
            email: 'zzanggu@naver.com'
        },
        {
            id: 4,
            name: '장보고',
            email: 'jangboko@naver.com'
        },
    ]

    // 화면에 컨테이너로만 유저의 이름과 이메일 출력하기

    // const userList = users.map((user, i)=><User user={user} key={i}/>)
    const userList = <Users users={users}/>

    return (
        <div>
            {userList}
        </div>
    );
};

export default UserContainer;
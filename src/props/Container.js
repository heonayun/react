import React from "react";
import Component3 from "./Component3";

const Container = () => {
    // const name = "허나윤";
    // const age = 20;

    // const style = {
    //     color: "red",
    // };

    // 컴포넌트3을 만든 후 자식 컴포넌트에게 이름, 나이, 전화번호, 주소를 전달 후 화면에 출력
    const users = {
        name : "허나윤",
        age : 28,
        phone : "123 - 4567 - 8910",
        address : "seoul",
    }
    
    return (
        <>
            {/* <Component1 name={name} age={age} /> */}
            {/* <Component2 style={style} /> */}
            <Component3 users={users} />
            
            {/* const Component3 = ({users}) => {
            // const {users} = props;
            const {name, age, phone, address} = users;

                return (
                    <ul>
                        <li>{name}</li> 
                        <li>{age} </li> 
                        <li>{phone} </li> 
                        <li>{address}</li> 
                    </ul>
                );
            }; */}
        </>
    );
};

export default Container;

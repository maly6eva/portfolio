import React, {useState} from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

type AddressPropsType = {
    street: string,
    city: string,
}

type MyFriendsType = {
    id: number,
    name: string,
    age: number,
    address: AddressPropsType
}

export type CityType = {
    title: string,
    user: MyFriendsType[],
    deliteCity: (city: string) => void,
}

export const City = ({title, user}: CityType) => {
    const [showFriendsFromLA, setShowFriendsFromLA] = useState(false);

    const toggleCityVisibility = () => {
        setShowFriendsFromLA(!showFriendsFromLA); // Переключаем состояние
    }

    // Фильтруем список друзей на основе состояния
    const filteredUsers = showFriendsFromLA
        ? user.filter(el => el.address.city === 'Los Angeles')
        : user;

    const users = filteredUsers.map((el) => {
        return (
            <li key={el.id}>
                <strong>{el.name}</strong> (Age: {el.age}) <strong>Address:</strong>
                {el.address.street}, {el.address.city}
            </li>
        );
    });

    return (
        <CitySection>
            <Container>
                <FlexWrapper justify={'center'}>
                    <div id='hw'>
                        <h2>{title}</h2>
                        <ul>
                            {users}
                        </ul>
                        <button onClick={toggleCityVisibility}>
                            {showFriendsFromLA ? 'SHOW ALL FRIENDS' : 'SHOW ME FRIENDS FROM LA'}
                        </button>
                    </div>
                </FlexWrapper>
            </Container>
        </CitySection>
    );
};

const CitySection = styled.section`
`
import React from 'react';
import styled from 'styled-components';

const ProfileBoard = styled.div`
    /* width: 100%;
    height: 15rem;
    position: absolute;
    top: 3.5rem;
    box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
    border: 1px solid #dedede; */
    background: #f7f7f7;
`;

const ProfileImgTop = styled.img`
    margin-top: 7.5rem;
`;

const ProfileImg = styled.img`
    margin-top: 1rem;
`;


function ProfileComponent() {
    return (
        <ProfileBoard>
            <ProfileImgTop href="#href" src="img/profile_01.png" />
            <ProfileImg href="#href" src="img/profile_02.png" />
            <ProfileImg href="#href" src="img/profile_01.png" />
            <ProfileImg href="#href" src="img/profile_02.png" />
        </ProfileBoard>
    );
}

export default ProfileComponent;

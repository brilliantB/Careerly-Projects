import React from 'react';
import styled from 'styled-components';
import ProfileComponent from './ProfileComponent';

const Boardpage = styled.div`
    width: 562px;
    height: 401px;
    background-color: #ffffff;
    margin: 0 auto;
    border: 1px solid #dbdbdb !important;
    margin-bottom: 0.75rem !important;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;




function BoardComponent() {
    return (
        <>
            <Boardpage>
                <ProfileComponent />

            </Boardpage>
        </>
    )
}

export default BoardComponent;

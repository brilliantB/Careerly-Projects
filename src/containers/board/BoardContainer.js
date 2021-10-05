import React from 'react';
import BoardComponent from '../../components/board/BoardComponent';
import NavbarComponent from '../../components/common/navbar/NavbarComponent';

function BoardContainer() {
    return (
        <>
            <NavbarComponent />
            <BoardComponent />
        </>
    );
}

export default BoardContainer;

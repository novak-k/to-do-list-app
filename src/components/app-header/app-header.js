import React from 'react';

import './app-header.css';
import styled from 'styled-components'; //он эти стили удалил

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover {
            color: blue; 
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {      
    return (
        <Header>
        {/* <Header as='a'> */}
        {/* <Header colored> */}
            <h1>Kate Novak</h1>
            <h2>{allPosts} posts, liked {liked} of them</h2>
        </Header>
    )
}

export default AppHeader;
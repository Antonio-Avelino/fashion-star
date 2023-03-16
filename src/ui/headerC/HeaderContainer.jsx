"use client"
import styled from 'styled-components'


const HeaderStyle = styled.div`

    width: 100%;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

`


const HeaderContainer = ({children})=>{

    return (
        <HeaderStyle>
        {children}
        </HeaderStyle>
    )

}

export default HeaderContainer
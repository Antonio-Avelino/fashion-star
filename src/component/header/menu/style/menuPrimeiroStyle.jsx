"use client"
import Link from 'next/link'
import styled from 'styled-components'


export const StyledLInk = styled(Link)`
   color: ${theme=>theme.theme.color.textosFraco};
text-decoration: none;
:hover{
    color: ${theme=>theme.theme.color.hoverFraco};
   
}

`
export const Menu1Style = styled.nav`

width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0px;
margin-top: 1%;

.lista1 ul {
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    align-items: center;
    margin:0px;
    padding: 0px;
    

}
.lista1 ul li {
     
    margin: 0px;
    list-style: none;
    font-weight: 500;
    
   font-size: 0.6875rem;

}
.lista1 .lado-esquerdo li {

   color: ${theme=>theme.theme.color.textosFraco};
   padding-right:16px;
   
}
.lista1 .lado-direito li {
    color: ${theme=>theme.theme.color.textosFraco};
   padding-left:16px;
}
`